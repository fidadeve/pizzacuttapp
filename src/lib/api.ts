/**
 * API client for the PizzaCut application.
 *
 * Provides wrapper functions for API calls.
 */
export async function apiFetch(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'API request failed');
  }
  return res;
}
