/**
 * Client and server-side validation helpers for the PizzaCut application.
 *
 * Shared validation schemas and utility functions used across the stack.
 */
import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price_cents: z.number().int().min(0, 'Price must be positive'),
  image_url: z.string().url('Must be a valid URL').optional(),
  is_available: z.boolean().default(true),
});

export const orderSchema = z.object({
  items: z.array(z.object({
    product_id: z.string().uuid(),
    quantity: z.number().int().min(1),
  })).min(1, 'At least one item required'),
  address: z.string().min(1, 'Delivery address required'),
});

export const loginSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
