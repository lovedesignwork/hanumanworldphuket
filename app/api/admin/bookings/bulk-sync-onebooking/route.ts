import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { requireSuperAdmin, isAuthError } from '@/lib/auth/api-auth';
import { pushBookingToOneBooking } from '@/lib/onebooking/sync';

export const maxDuration = 300; // 5 minutes timeout for bulk sync

export async function POST(request: NextRequest) {
  const auth = await requireSuperAdmin(request);
  if (isAuthError(auth)) return auth;

  try {
    const { bookingIds, syncAll } = await request.json();

    let bookingsToSync;
    
    if (syncAll) {
      // Fetch all confirmed/completed bookings
      const { data, error } = await supabaseAdmin
        .from('bookings')
        .select(`
          *,
          packages (*),
          booking_customers (*),
          booking_addons (*, promo_addons (*)),
          booking_transport (*)
        `)
        .in('status', ['confirmed', 'completed'])
        .order('created_at', { ascending: false });

      if (error) throw error;
      bookingsToSync = data || [];
    } else if (bookingIds && Array.isArray(bookingIds)) {
      // Fetch specific bookings
      const { data, error } = await supabaseAdmin
        .from('bookings')
        .select(`
          *,
          packages (*),
          booking_customers (*),
          booking_addons (*, promo_addons (*)),
          booking_transport (*)
        `)
        .in('id', bookingIds);

      if (error) throw error;
      bookingsToSync = data || [];
    } else {
      return NextResponse.json({ error: 'Provide bookingIds array or syncAll: true' }, { status: 400 });
    }

    const results = {
      total: bookingsToSync.length,
      synced: 0,
      skipped: 0,
      failed: 0,
      details: [] as { booking_ref: string; status: string; error?: string }[],
    };

    for (const booking of bookingsToSync) {
      const customer = booking.booking_customers;
      const transport = booking.booking_transport;

      try {
        const syncResult = await pushBookingToOneBooking('booking.created', {
          id: booking.id,
          booking_ref: booking.booking_ref,
          activity_date: booking.activity_date,
          time_slot: booking.time_slot,
          guest_count: Number(booking.guest_count) || 0,
          total_amount: Number(booking.total_amount) || 0,
          discount_amount: Number(booking.discount_amount) || 0,
          currency: 'THB',
          status: booking.status,
          special_requests: booking.special_requests || null,
          stripe_payment_intent_id: booking.stripe_payment_intent_id,
          created_at: booking.created_at,
          packages: booking.packages ? {
            name: booking.packages.name,
            price: Number(booking.packages.price) || 0,
          } : null,
          customers: customer ? {
            name: `${customer.first_name} ${customer.last_name}`,
            email: customer.email,
            phone: customer.phone || null,
            country_code: customer.country_code || null,
          } : null,
          transport_type: transport?.transport_type || null,
          hotel_name: transport?.hotel_name || null,
          room_number: transport?.room_number || null,
          non_players: Number(transport?.non_players) || 0,
          private_passengers: Number(transport?.private_passengers) || 0,
          transport_cost: Number(transport?.transport_cost) || 0,
          booking_addons: booking.booking_addons || [],
        });

        if (syncResult.success) {
          results.synced++;
          results.details.push({ booking_ref: booking.booking_ref, status: 'synced' });
        } else if (syncResult.code === 'DUPLICATE_BOOKING') {
          results.skipped++;
          results.details.push({ booking_ref: booking.booking_ref, status: 'skipped', error: 'Already exists' });
        } else {
          results.failed++;
          results.details.push({ booking_ref: booking.booking_ref, status: 'failed', error: syncResult.error });
        }
      } catch (error) {
        results.failed++;
        results.details.push({ 
          booking_ref: booking.booking_ref, 
          status: 'failed', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Bulk sync completed: ${results.synced} synced, ${results.skipped} skipped, ${results.failed} failed`,
      results,
    });
  } catch (error) {
    console.error('Bulk sync error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Internal server error' 
    }, { status: 500 });
  }
}
