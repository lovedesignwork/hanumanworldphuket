import { supabaseAuth } from '@/lib/supabase/auth';

// Wait for session to be available (with retries for initial load)
async function waitForSession(maxRetries = 5, delayMs = 200): Promise<string> {
  for (let i = 0; i < maxRetries; i++) {
    const { data: { session } } = await supabaseAuth.auth.getSession();
    if (session?.access_token) {
      return session.access_token;
    }
    // Wait before retry
    if (i < maxRetries - 1) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  throw new Error('No active session');
}

export async function getAuthHeaders(): Promise<HeadersInit> {
  const accessToken = await waitForSession();

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };
}

export async function adminFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const headers = await getAuthHeaders();
  
  return fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
}

export async function adminGet(url: string): Promise<Response> {
  return adminFetch(url, { method: 'GET' });
}

export async function adminPost(url: string, body: unknown): Promise<Response> {
  return adminFetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function adminPut(url: string, body: unknown): Promise<Response> {
  return adminFetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export async function adminPatch(url: string, body: unknown): Promise<Response> {
  return adminFetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export async function adminDelete(url: string): Promise<Response> {
  return adminFetch(url, { method: 'DELETE' });
}
