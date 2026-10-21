/**
 * Rate limiting middleware for API routes.
 *
 * Limits requests per IP to prevent abuse.
 */
let requests = new Map<string, number[]>();

export function rateLimit(ip: string, maxRequests: number = 10, windowMs: number = 60000) {
  const now = Date.now();
  const timestamps = requests.get(ip) || [];
  const recent = timestamps.filter(t => now - t < windowMs);
  
  if (recent.length >= maxRequests) {
    return false;
  }
  
  recent.push(now);
  requests.set(ip, recent);
  
  return true;
}
