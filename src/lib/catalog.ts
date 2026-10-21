/**
 * Temporary catalog helpers for the test preview.
 * Replace sample empty results with database-backed records before production.
 */
export async function getProducts(_filters: { category?: string; search?: string } = {}) {
  return [];
}
export async function getFaqs() {
  return [];
}
export async function getPage(slug: string) {
  return { slug, title: slug.replace(/-/g, ' '), content: '', preview_only: true };
}
export async function getPromos() {
  return [];
}
