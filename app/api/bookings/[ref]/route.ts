import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ref: string }> }
) {
  try {
    const { ref } = await params;
    const bookingRef = ref;

    const { data: booking, error } = await supabaseAdmin
      .from('bookings')
      .select(`
        *,
        packages (*),
        booking_customers (*),
        booking_addons (*, promo_addons (*)),
        booking_transport (*)
      `)
      .eq('booking_ref', bookingRef)
      .single();

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}
