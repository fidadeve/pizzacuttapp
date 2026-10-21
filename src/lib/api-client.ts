/**
 * API client for external services.
 *
 * Wrapper for making API requests to the backend services.
 */
export class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(endpoint: string, options?: RequestInit) {
    const res = await fetch(`${this.baseURL}/api${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
    });
    return await res.json();
  }

  async post(endpoint: string, data: any, options?: RequestInit) {
    const res = await fetch(`${this.baseURL}/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    });
    return await res.json();
  }
}
