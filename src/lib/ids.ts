/**
 * Nanoid-based ID generator for the PizzaCut application.
 *
 * Generates unique string IDs compatible with Drizzle ORM.
 */
import { nanoid } from 'nanoid';

export function generateId(): string {
  return nanoid(12);
}
