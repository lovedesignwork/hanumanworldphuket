import { supabase } from './client';

// Re-export the singleton client for auth operations
export const supabaseAuth = supabase;

export type AdminRole = 'superadmin' | 'admin' | 'staff' | 'writer';

export interface AdminUser {
  id: string;
  user_id: string;
  email: string;
  role: AdminRole;
  full_name: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export async function signIn(email: string, password: string) {
  console.log('[signIn] Starting manual sign in for:', email);
  
  // Use native fetch to bypass SDK hang issue
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  console.log('[signIn] Making fetch request to:', `${supabaseUrl}/auth/v1/token?grant_type=password`);
  
  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseAnonKey,
    },
    body: JSON.stringify({ email, password }),
  });
  
  console.log('[signIn] Fetch response status:', response.status);
  
  const data = await response.json();
  console.log('[signIn] Response data:', { hasAccessToken: !!data.access_token, hasUser: !!data.user });
  
  if (!response.ok) {
    console.error('[signIn] Auth error:', data.error_description || data.error || 'Unknown error');
    throw new Error(data.error_description || data.error || 'Sign in failed');
  }
  
  // Manually set the session in the Supabase client
  console.log('[signIn] Setting session in Supabase client...');
  const { error: sessionError } = await supabaseAuth.auth.setSession({
    access_token: data.access_token,
    refresh_token: data.refresh_token,
  });
  
  if (sessionError) {
    console.error('[signIn] Failed to set session:', sessionError.message);
    throw sessionError;
  }
  
  console.log('[signIn] Session set successfully');
  
  return {
    user: data.user,
    session: {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      user: data.user,
    },
  };
}

export async function signOut() {
  const { error } = await supabaseAuth.auth.signOut();
  if (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const { data: { user } } = await supabaseAuth.auth.getUser();
  return user;
}

export async function getAdminUser(userId: string): Promise<AdminUser | null> {
  const { data, error } = await supabaseAuth
    .from('admin_users')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
    .single();

  if (error || !data) {
    return null;
  }

  return data as AdminUser;
}

export async function isAdmin(userId: string): Promise<boolean> {
  const adminUser = await getAdminUser(userId);
  return adminUser !== null;
}

export async function isSuperAdmin(userId: string): Promise<boolean> {
  const adminUser = await getAdminUser(userId);
  return adminUser?.role === 'superadmin';
}
