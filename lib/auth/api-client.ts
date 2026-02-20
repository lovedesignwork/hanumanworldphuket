import { supabaseAuth } from '@/lib/supabase/auth';

export async function getAuthHeaders(): Promise<HeadersInit> {
  const { data: { session } } = await supabaseAuth.auth.getSession();
  
  if (!session?.access_token) {
    throw new Error('No active session');
  }

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session.access_token}`,
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
