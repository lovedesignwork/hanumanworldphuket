'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { supabaseAuth, AdminUser, signOut as authSignOut } from '@/lib/supabase/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  adminUser: AdminUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    // Initialize from localStorage if available (for faster hydration)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('adminUser');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshAuth = async () => {
    try {
      const { data: { session } } = await supabaseAuth.auth.getSession();
      const authUser = session?.user ?? null;
      setUser(authUser);

      if (authUser && session) {
        const response = await fetch(`/api/auth/check-admin?email=${encodeURIComponent(authUser.email || '')}`, {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        });
        const data = await response.json();
        if (data.isAdmin && data.user) {
          const newAdminUser: AdminUser = {
            id: data.user.id,
            user_id: authUser.id,
            email: data.user.email,
            role: data.user.role,
            full_name: data.user.fullName,
            is_active: true,
            created_at: '',
            updated_at: '',
          };
          setAdminUser(newAdminUser);
          localStorage.setItem('adminUser', JSON.stringify(newAdminUser));
        } else {
          setAdminUser(null);
          localStorage.removeItem('adminUser');
        }
      } else {
        // Check if there's cached admin user in localStorage but no session
        // This means the session expired, so clear everything
        setAdminUser(null);
        localStorage.removeItem('adminUser');
      }
    } catch (error) {
      console.error('Auth refresh error:', error);
      setUser(null);
      setAdminUser(null);
      localStorage.removeItem('adminUser');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAuth();

    const { data: { subscription } } = supabaseAuth.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setUser(session?.user ?? null);
        await refreshAuth();
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setAdminUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await authSignOut();
    setUser(null);
    setAdminUser(null);
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ user, adminUser, loading, signOut, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
