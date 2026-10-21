/**
 * Admin statistics calculations for the PizzaCut dashboard.
 *
 * Calculates various stats displayed on the admin overview page.
 */
export function getAdminStats(orders: any[]) {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total_cents, 0);
  const totalOrders = orders.length;
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  
  return {
    totalRevenue,
    totalOrders,
    averageOrderValue,
  };
}
