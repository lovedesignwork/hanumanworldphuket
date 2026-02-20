'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Settings, 
  Menu, 
  X,
  ChevronLeft,
  Package,
  Gift,
  LogOut,
  Users,
  Loader2,
  FileText,
  MessageSquare,
  Tag,
  Scale,
} from 'lucide-react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

interface AdminLayoutProps {
  children: ReactNode;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  superadminOnly?: boolean;
  writerAllowed?: boolean;
  roles?: string[];
}

const navItems: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/bookings', label: 'Bookings', icon: CalendarCheck },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/addons', label: 'Add-ons', icon: Gift },
  { href: '/admin/promo-codes', label: 'Promo Codes', icon: Tag },
  { href: '/admin/blog', label: 'Blog', icon: FileText, writerAllowed: true },
  { href: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
  { href: '/admin/legal', label: 'Legal Content', icon: Scale },
  { href: '/admin/users', label: 'Users', icon: Users, superadminOnly: true },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

function AdminLayoutContent({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, adminUser, loading, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Skip auth check for login page
  const isLoginPage = pathname === '/admin/login';

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // All useEffect hooks must be at the top, before any conditional returns
  useEffect(() => {
    if (!loading && !isLoginPage && !adminUser) {
      router.push('/admin/login');
    }
  }, [loading, adminUser, isLoginPage, router]);

  // Writer role redirect - must be before any returns
  useEffect(() => {
    if (!loading && adminUser?.role === 'writer' && !pathname.startsWith('/admin/blog')) {
      router.push('/admin/blog');
    }
  }, [loading, adminUser?.role, pathname, router]);

  const handleSignOut = async () => {
    await signOut();
  };

  const filteredNavItems = navItems.filter(item => {
    const userRole = adminUser?.role;
    
    // Writers can only access blog
    if (userRole === 'writer') {
      return item.writerAllowed === true;
    }
    
    // Superadmin-only items
    if (item.superadminOnly && userRole !== 'superadmin') {
      return false;
    }
    
    return true;
  });

  // Show loading state only if there's no cached admin user or not yet mounted
  if (!mounted || (loading && !isLoginPage && !adminUser)) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#1a237e]" />
      </div>
    );
  }

  // For login page, just render children without the layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If not authenticated and not loading, don't render anything (redirect will happen)
  if (!adminUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1a237e] transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center h-20 px-3 border-b border-white/10 relative">
          <Link href="/admin" className="flex items-center justify-center w-full">
            <Image
              src="/images/HW Logo.png"
              alt="Hanuman World"
              width={220}
              height={60}
              className="h-14 w-full max-w-[200px] object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/70 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white rounded-xl transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Site</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-500/20 hover:text-red-200 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:pl-64">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-slate-600 hover:text-slate-800"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 lg:ml-0" />
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-800">
                {adminUser?.full_name || adminUser?.email?.split('@')[0] || 'Admin'}
              </p>
              <p className="text-xs text-slate-500 capitalize">{adminUser?.role || 'Admin'}</p>
            </div>
            <div className="w-10 h-10 bg-[#1a237e] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {adminUser?.full_name?.[0]?.toUpperCase() || adminUser?.email?.[0]?.toUpperCase() || 'A'}
              </span>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
