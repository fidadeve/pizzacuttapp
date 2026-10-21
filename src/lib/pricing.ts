/**
 * Pricing calculation helpers for the PizzaCut application.
 *
 * Calculates order totals including tax, discounts, and delivery fees.
 */
export function calculateSubtotal(items: { price_cents: number; quantity: number }[]): number {
  return items.reduce((sum, item) => sum + item.price_cents * item.quantity, 0);
}

export function calculateDiscount(subtotal: number, discount_cents: number): number {
  return Math.min(discount_cents, subtotal);
}

export function calculateTotal(subtotal: number, discount_cents: number): number {
  return subtotal - discount_cents;
}
