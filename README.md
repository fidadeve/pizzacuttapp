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
statement "" requires M") or resets the second socket with `ECONNRESET`.

