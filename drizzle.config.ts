import type { Config } from 'drizzle-kit';

/**
 * Migrations are plain SQL files in ./drizzle that `npm run db:migrate` applies
 * in order. Run `npm run db:generate` after editing src/lib/db/schema.ts to
 * produce a new migration file. */

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? 'postgres://postgres@127.0.0.1:5432/postgres',
  },
  verbose: true,
  strict: true,
} satisfies Config;
