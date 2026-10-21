# Pizza Cut Taste Maker

Local pizza ordering app. Built with Next.js, drizzle-orm + postgres.js on a local PGlite (Postgres-in-WASM) socket server for development.

## Local development database

The app uses a real Postgres wire protocol connection everywhere — it talks
to the same `postgres` driver (`DATABASE_URL`) in production and in local
development. Locally, a small WASM Postgres (PGlite) is started with
`npm run db:server` and exposed over the wire protocol on
`postgres://127.0.0.1:5432/pizzacut`.

## ⚠️ Local DB concurrency limitation

The local PGlite socket server is **single-protocol-state**: it runs one
Postgres protocol machine, and concurrent extended-protocol messages (parse /
bind / execute) from two sockets interleave on the shared state. That
corrupts parameter counts ("bind message supplies N parameters but prepared
statement "–– requires M–– requires M) or resets the second socket with `ECONNRESET`.

This is a limitation of the local dev database only, not the app. Production
Postgres (Neon/PgBouncer/etc.) handles concurrency normally.

### What we verified

Repro scripts in `tmp/repro-pglite-socket*.ts` and `tmp/repro-prod-*.ts`:

- One pooled client issuing two queries in parallel via `Promise.all` → the
  second query fails with `ECONNRESET`.
- Two independent clients connecting at the same time → the second is reset
  on its first real protocol exchange.
- Serialising all queries through an async work-queue/mutex → both succeed
  (see `tmp/repro-prod-mutex-v3.ts`).

### How the repo works around it

1. **Limit the socket server to one connection.**
   `LOCAL_DB_MAX_CONNECTIONS=1` in `.env.local` / `.env.example`. The app
   pool is pinned to one connection via `PG_MAX_CONNECTIONS=1`, so the single
   socket is never contended by the pool.
2. **Keep every Next.js handler to one DB operation at a time.** No handler
   fires two concurrent queries on the same pooled client. That matches the
   single-connection setup and avoids interleaving on the socket.
3. If you need to run anything that fires concurrent queries on the same
   client (advanced setups), serialise them through an async mutex. A minimal
   example lives in `tmp/repro-prod-mutex-v3.ts`.

### Running the repro scripts

The repro scripts exercise concurrency against a **running** DB server, so
start the server first. Either run it in the foreground in one terminal:

```
npx tsx scripts/local-db-server.mjs   # listens on 127.0.0.1:5432
```

then, in another terminal:

```
npx tsx tmp/repro-prod-mutex-v3.ts
```

Or run the server in the background from one shell:

```
npx tsx scripts/local-db-server.mjs &
npx tsx tmp/repro-prod-mutex-v3.ts
kill %1   # stop the server
```

Scripts that need the server already running:

- `tmp/repro-pglite-socket*.ts` — direct concurrency tests against the socket
  server.
- `tmp/repro-prod-*.ts` — simulate the production startup path (env + pool +
  concurrent queries) against a running server.
- `tmp/repro-prod-mutex-v3.ts` — the serialised variant that passes.

### When you need more connections

For any workflow that genuinely needs concurrent queries on the local dev
database, the sustainable fix is a real Postgres instance (Neon, a local
Postgres install, etc.) set as `DATABASE_URL`. The app is designed for that
path and does not have any PGlite-specific logic in the application code.

## Getting started

1. Copy `.env.example` to `.env.local` and fill in any missing values.
2. Start the local DB: `npm run db:server` (in its own terminal).
3. Migrate + seed: `npm run db:setup`.
4. Run the dev server: `npm run dev`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string used by the app everywhere. Local dev points at the PGlite socket server; production points at a managed Postgres. |
| `PG_MAX_CONNECTIONS` | postgres.js pool size. Set to `1` locally so the pool never contends the single PGlite socket. |
| `LOCAL_DB_MAX_CONNECTIONS` | `PGLiteSocketServer` max connections. Set to `1` locally. |
| `LOCAL_DB_PORT` / `LOCAL_DB_HOST` / `LOCAL_DB_DIR` | PGlite socket server config (defaults: 5432, 127.0.0.1, `.data/local-db`). |
| `AUTH_SECRET` | Server token used for session cookies. |
| `APP_ORIGIN` | Public origin used for auth callbacks (e.g. `http://localhost:3000` in dev, your real domain in production). |
| `MAP_TILE_URL` / `MAP_ATTRIBUTION` | Tile source for the map components (defaults to OpenStreetMap). |

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js dev server. |
| `npm run build` | Production build. |
| `npm start` | Start the production server. |
| `npm run db:server` | Start the local PGlite socket server. |
| `npm run db:migrate` | Run migrations. |
| `npm run db:seed` | Seed sample data. |
| `npm run db:setup` | Migrate then seed. |
| `npm run db:reset` | Reset the local database. |
| `npm run typecheck` | TypeScript check. |
| `npm run test` | Run tests. |
| `npm run verify` | typecheck + tests + build. |

## Deployment

For production, set `DATABASE_URL` to a real Postgres (not the PGlite socket
server), set `PG_MAX_CONNECTIONS` to a sensible pool size, and run `npm run
build && npm start` (or your hosting's equivalent). The local DB concurrency
limitations do not apply to production Postgres.

