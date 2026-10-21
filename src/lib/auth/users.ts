import { headers } from 'next/headers';
import { createUser } from '@/lib/db'
import { users } from '@/lib/db/schema';
import { hashPassword } from '@/scripts/lib/password.mjs';

export async function register(userData: { name: string; email: string; password: string }) {
  const hashed = await hashPassword(userData.password);
  return createUser({
    name: userData.name,
    email: userData.email,
    password_hash: hashed,
    role: 'customer',
  });
}
