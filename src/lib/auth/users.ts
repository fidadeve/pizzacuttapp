/**
 * Authentication helpers for preview builds.
 * Real login and registration require a configured database and session provider.
 */
import { createUser } from '@/lib/db';
import { hashPassword } from '@/scripts/lib/password.mjs';

export async function register(userData: { name: string; email: string; password: string }) {
  const hashed = await hashPassword(userData.password);
  return createUser({ name: userData.name, email: userData.email, password_hash: hashed, role: 'customer' });
}

export async function login(_email: string, _password: string) {
  return null;
}
