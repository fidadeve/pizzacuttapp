// Seed script for the application
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { hashPassword } from '@/scripts/lib/password.mjs'

async function main() {
  // Seed default users
  const adminPassword = await hashPassword('admin123')
  await db.insert(users).values({
    id: 'user-1',
    name: 'Admin User',
    email: 'admin@pizzacut.dev',
    password_hash: adminPassword,
    role: 'admin',
  });
  console.log('Admin user seeded');
}

main().catch(console.error)
