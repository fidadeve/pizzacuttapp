/**
 * Database schema definitions for Drizzle ORM.
 *
 * Defines all database tables and relationships for the PizzaCut application.
 */
import { pgTable, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password_hash: text('password_hash').notNull(),
  role: text('role').notNull().default('customer'),
  phone: text('phone'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const products = pgTable('products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price_cents: integer('price_cents').notNull().default(0),
  image_url: text('image_url'),
  is_available: boolean('is_available').notNull().default(true),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const orders = pgTable('orders', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  status: text('status').notNull().default('pending'),
  total_cents: integer('total_cents').notNull().default(0),
  delivery_address: text('delivery_address'),
  promo_code: text('promo_code'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const cart_items = pgTable('cart_items', {
  id: text('id').primaryKey(),
  cart_id: text('cart_id').notNull().references(() => carts.id),
  product_id: text('product_id').notNull(),
  quantity: integer('quantity').notNull().default(1),
  price_cents: integer('price_cents').notNull().default(0),
});

export const carts = pgTable('carts', {
  id: text('id').primaryKey(),
  status: text('status').notNull().default('open'),
  expires_at: timestamp('expires_at').notNull().defaultNow(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const promos = pgTable('promos', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(),
  discount_cents: integer('discount_cents').notNull().default(0),
  expires_at: timestamp('expires_at'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});
