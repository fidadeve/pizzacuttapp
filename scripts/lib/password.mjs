/**
 * Password hashing utility for the PizzaCut application.
 *
 * This module provides bcrypt-based password hashing and verification.
 */
import { compare, hash } from 'bcryptjs';

export async function hashPassword(plain: string): Promise<string> {
  const saltRounds = 12;
  return hash(plain, saltRounds);
}

export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
  return compare(plain, hashed);
}
