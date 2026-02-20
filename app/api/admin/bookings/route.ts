import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { requireAdmin, isAuthError } from '@/lib/auth/api-auth';

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (isAuthError(auth)) return auth;

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const status = searchParams.get('status') || 'all';
    const sortField = searchParams.get('sortField') || 'created_at';
    const sortDirection = searchParams.get('sortDirection') || 'desc';
    const dateFilterType = searchParams.get('dateFilterType') || 'play';
    const dateFrom = searchParams.get('dateFrom') || '';
    const dateTo = searchParams.get('dateTo') || '';

    let query = supabaseAdmin
      .from('bookings')
      .select(`
        *,
        packages (name),
        promo_codes (code, discount_type, discount_value),
        booking_customers (first_name, last_name, email, phone),
        booking_transport (id, transport_type, hotel_name, room_number, private_passengers, non_players),
        booking_addons (quantity, promo_addons (name))
      `, { count: 'exact' })
      .order(sortField, { ascending: sortDirection === 'asc' })
      .range((page - 1) * pageSize, page * pageSize - 1);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    if (dateFrom || dateTo) {
      const dateField = dateFilterType === 'booking' ? 'created_at' : 'activity_date';
      
      if (dateFrom && dateTo) {
        if (dateFilterType === 'booking') {
          query = query.gte(dateField, `${dateFrom}T00:00:00`).lte(dateField, `${dateTo}T23:59:59`);
        } else {
          query = query.gte(dateField, dateFrom).lte(dateField, dateTo);
        }
      } else if (dateFrom) {
        if (dateFilterType === 'booking') {
          query = query.gte(dateField, `${dateFrom}T00:00:00`);
        } else {
          query = query.gte(dateField, dateFrom);
        }
      } else if (dateTo) {
        if (dateFilterType === 'booking') {
          query = query.lte(dateField, `${dateTo}T23:59:59`);
        } else {
          query = query.lte(dateField, dateTo);
        }
      }
    }

    const { data, count, error } = await query;

    if (error) {
      console.error('Error fetching bookings:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data, count });
  } catch (error) {
    console.error('Error in admin bookings API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (isAuthError(auth)) return auth;

  try {
    const body = await request.json();
    const { bookingId, transportId, status, hotelName, roomNumber } = body;

    const { error: bookingError } = await supabaseAdmin
      .from('bookings')
      .update({ status })
      .eq('id', bookingId);

    if (bookingError) {
      console.error('Error updating booking:', bookingError);
      return NextResponse.json({ error: bookingError.message }, { status: 500 });
    }

    if (transportId) {
      const { error: transportError } = await supabaseAdmin
        .from('booking_transport')
        .update({
          hotel_name: hotelName || null,
          room_number: roomNumber || null,
        })
        .eq('id', transportId);

      if (transportError) {
        console.error('Error updating transport:', transportError);
        return NextResponse.json({ error: transportError.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in admin bookings PUT:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
