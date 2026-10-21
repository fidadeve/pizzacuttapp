/**
 * Authentication helpers.
 * Database-backed account creation is not available until a database is configured.
 */
import { compare, hash } from 'bcryptjs';
import { createUser } from '@/lib/db';

export async function register(userData: { name: string; email: string; password: string }) {
  const hashed = await hash(userData.password, 12);
  return createUser({ name: userData.name, email: userData.email, password_hash: hashed, role: 'customer' });
}

export async function login(_email: string, _password: string) {
  // Login remains disabled until persistent user storage and sessions are configured.
  return null;
}
