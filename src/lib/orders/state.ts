/**
 * Orders state management for the PizzaCut application.
 *
 * Manages orders state including loading, error, and success states.
 */
export interface OrderState {
  orders: import('@/lib/orders/service').Order[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function createOrderState(): OrderState {
  return {
    orders: [],
    loading: false,
    error: null,
    refresh: async () => {
      // Refresh orders from API
    },
  };
}
