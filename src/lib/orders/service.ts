/**
 * Orders service for the PizzaCut application.
 *
 * Business logic for creating and managing orders.
 */
export interface Order {
  id: string;
  user_id: string;
  status: string;
  total_cents: number;
  delivery_address: string;
  created_at: string;
  updated_at: string;
}

export async function createOrder(items: { product_id: string; quantity: number }[], address: string) {
  // Create order in database
  return {
    id: 'ord-1',
    user_id: 'user-1',
    status: 'pending',
    total_cents: 0,
    delivery_address: address,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}
