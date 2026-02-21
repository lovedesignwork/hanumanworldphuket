import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ref: string }> }
) {
  try {
    const { ref } = await params;
    const bookingRef = ref;
    
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Unauthorized - session verification required' },
        { status: 401 }
      );
    }

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

    // Verify the session_id matches the booking's stripe_checkout_session_id
    if (booking.stripe_checkout_session_id !== sessionId) {
      // As a fallback, verify with Stripe that this session exists and matches
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        // Check if the session's metadata matches this booking
        if (session.metadata?.booking_ref !== bookingRef) {
          return NextResponse.json(
            { error: 'Unauthorized - session does not match booking' },
            { status: 401 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: 'Unauthorized - invalid session' },
          { status: 401 }
        );
      }
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
