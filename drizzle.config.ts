import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/0000_init.sql',
  out: './drizzle/meta/0000_snapshot.json',
  driver: 'pg',
});
