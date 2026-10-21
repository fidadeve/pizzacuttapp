/**
 * Database exports for the test preview.
 * A real database connection must be configured before enabling live accounts or orders.
 */
import { users, products, orders, carts, cart_items, promos } from './schema';

export const db = null;
export { users, products, orders, carts, cart_items, promos };

export async function createUser(_data: {
  name: string;
  email: string;
  password_hash: string;
  role: string;
}) {
  throw new Error('Database is not configured for this preview deployment.');
}
