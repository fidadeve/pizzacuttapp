/**
 * Temporary in-memory cart for preview builds.
 * This is not persistent storage; use a configured database before real orders.
 */
type CartItem = { id: string; product_id: string; quantity: number };
let items: CartItem[] = [];

export async function getCart() {
  return { items, total_items: items.reduce((sum, item) => sum + item.quantity, 0), preview_only: true };
}

export async function addCartItem(productId: string, quantity = 1) {
  if (!productId || typeof productId !== 'string') throw new Error('product_id is required');
  const safeQuantity = Math.max(1, Math.min(99, Number(quantity) || 1));
  const existing = items.find((item) => item.product_id === productId);
  if (existing) existing.quantity += safeQuantity;
  else items.push({ id: crypto.randomUUID(), product_id: productId, quantity: safeQuantity });
  return { ...items.find((item) => item.product_id === productId)!, preview_only: true };
}

export async function removeCartItem(id: string) {
  items = items.filter((item) => item.id !== id);
  return { success: true, preview_only: true };
}

export async function clearCart() {
  items = [];
  return { success: true, preview_only: true };
}
