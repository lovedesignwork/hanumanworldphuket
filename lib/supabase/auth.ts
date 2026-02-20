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
  console.log('[signIn] Starting signInWithPassword for:', email);
  
  // Use a promise race to detect if signInWithPassword hangs
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      console.error('[signIn] TIMEOUT - signInWithPassword took more than 15 seconds');
      reject(new Error('Sign in timed out. Please try again.'));
    }, 15000);
  });
  
  const authPromise = supabaseAuth.auth.signInWithPassword({
    email,
    password,
  });
  
  console.log('[signIn] Waiting for signInWithPassword...');
  
  const { data, error } = await Promise.race([authPromise, timeoutPromise]);
  
  console.log('[signIn] signInWithPassword completed:', { 
    hasData: !!data, 
    hasSession: !!data?.session,
    hasUser: !!data?.user,
    hasError: !!error,
    errorMessage: error?.message
  });

  if (error) {
    console.error('[signIn] Error thrown:', error.message);
    throw error;
  }

  console.log('[signIn] Returning data');
  return data;
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
