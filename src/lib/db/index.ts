/**
 * Database index for the PizzaCut application.
 *
 * Export database client and schema references.
 */
import { db } from '@/lib/db'
import { users, products, orders, carts, cart_items, promos } from '@/lib/db/schema'

export { db };
export { users, products, orders, carts, cart_items, promos };
