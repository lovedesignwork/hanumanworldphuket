import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function GET() {
  try {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // Calculate week start (Monday)
    const dayOfWeek = now.getDay();
    const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - diffToMonday);
    const weekStartStr = weekStart.toISOString().split('T')[0];
    
    // Calculate month start
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];

    // Today's bookings
    const { data: todayData } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('activity_date', today)
      .in('status', ['confirmed', 'completed']);

    // This week's bookings
    const { data: weekData } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .gte('activity_date', weekStartStr)
      .lte('activity_date', today)
      .in('status', ['confirmed', 'completed']);

    // This month's bookings
    const { data: monthData } = await supabaseAdmin
      .from('bookings')
      .select('guest_count')
      .gte('activity_date', monthStart)
      .in('status', ['confirmed', 'completed']);

    // All confirmed guests (total)
    const { data: allConfirmed } = await supabaseAdmin
      .from('bookings')
      .select('guest_count')
      .in('status', ['confirmed', 'completed']);

    // All pending bookings
    const { data: pending } = await supabaseAdmin
      .from('bookings')
      .select('id')
      .eq('status', 'pending');

    // This month's pending bookings
    const { data: monthPending } = await supabaseAdmin
      .from('bookings')
      .select('id')
      .gte('activity_date', monthStart)
      .eq('status', 'pending');

    // Recent bookings
    const { data: recent } = await supabaseAdmin
      .from('bookings')
      .select(`
        *,
        packages (name),
        booking_customers (first_name, last_name, email)
      `)
      .order('created_at', { ascending: false })
      .limit(5);

    const stats = {
      todayBookings: todayData?.length || 0,
      weekBookings: weekData?.length || 0,
      monthBookings: monthData?.length || 0,
      totalGuests: allConfirmed?.reduce((sum, b) => sum + b.guest_count, 0) || 0,
      monthGuests: monthData?.reduce((sum, b) => sum + b.guest_count, 0) || 0,
      pendingBookings: pending?.length || 0,
      monthPendingBookings: monthPending?.length || 0,
    };

    return NextResponse.json({ stats, recentBookings: recent || [] });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
