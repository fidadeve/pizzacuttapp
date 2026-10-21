/**
 * Authentication guards for the PizzaCut application.
 *
 * Middleware-style guards to check user roles and permissions.
 */
export function isAdmin(user: any): user is { role: 'admin' } {
  return user?.role === 'admin';
}

export function isRider(user: any): user is { role: 'rider' } {
  return user?.role === 'rider';
}

export function isCustomer(user: any): user is { role: 'customer' } {
  return user?.role === 'customer';
}
