/**
 * Sanitization helpers for the PizzaCut application.
 *
 * XSS prevention and input sanitization utilities.
 */
export function sanitizeHTML(input: string): string {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}
