import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { supabaseAdmin } from '@/lib/supabase/server';
import Stripe from 'stripe';
import { sendBookingConfirmationEmail } from '@/lib/email/send-booking-confirmation';
import { sendBookingNotificationEmail } from '@/lib/email/send-booking-notification';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const bookingId = session.metadata?.booking_id;

      if (bookingId) {
        await supabaseAdmin
          .from('bookings')
          .update({
            status: 'confirmed',
            stripe_payment_intent_id: session.payment_intent as string,
          })
          .eq('id', bookingId);

        const { data: booking } = await supabaseAdmin
          .from('bookings')
          .select(`
            *,
            booking_customers (*),
            packages (*)
          `)
          .eq('id', bookingId)
          .single();

        if (booking) {
          await supabaseAdmin.rpc('increment_slot_bookings', {
            p_date: booking.activity_date,
            p_time: booking.time_slot,
            p_guests: booking.guest_count,
          });

          console.log(`Booking ${booking.booking_ref} confirmed!`);
        }
      }
      break;
    }

    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const bookingId = paymentIntent.metadata?.booking_id;

      if (bookingId) {
        await supabaseAdmin
          .from('bookings')
          .update({
            status: 'confirmed',
            stripe_payment_intent_id: paymentIntent.id,
          })
          .eq('id', bookingId);

        // Fetch complete booking data for email
        const { data: booking } = await supabaseAdmin
          .from('bookings')
          .select(`
            *,
            packages (*),
            booking_customers (*),
            booking_addons (*, promo_addons (*)),
            booking_transport (*)
          `)
          .eq('id', bookingId)
          .single();

        if (booking && booking.booking_customers) {
          const customer = booking.booking_customers;
          const transport = booking.booking_transport;
          
          // Format date for display
          const activityDate = new Date(booking.activity_date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          // Format time slot
          const formatTime = (time: string) => {
            const [hours] = time.split(':');
            const hour = parseInt(hours);
            const period = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
            return `${displayHour}:00 ${period}`;
          };

          // Prepare addons data
          const addons = booking.booking_addons?.map((addon: { promo_addons: { name: string }, quantity: number, unit_price: number }) => ({
            name: addon.promo_addons?.name || 'Add-on',
            quantity: addon.quantity,
            price: addon.unit_price,
          })) || [];

          // Send confirmation email to customer
          await sendBookingConfirmationEmail({
            customerEmail: customer.email,
            customerName: customer.first_name,
            bookingRef: booking.booking_ref,
            packageName: booking.packages?.name || 'Adventure Package',
            activityDate,
            timeSlot: formatTime(booking.time_slot),
            guestCount: booking.guest_count,
            totalAmount: booking.total_amount,
            hotelName: transport?.hotel_name,
            roomNumber: transport?.room_number,
            hasTransfer: !!transport,
            isPrivateTransfer: transport?.transport_type === 'private',
            addons,
          });

          console.log(`Booking confirmation email sent for ${booking.booking_ref}`);

          // Send notification email to admin
          try {
            await sendBookingNotificationEmail({
              bookingRef: booking.booking_ref,
              customerName: `${customer.first_name} ${customer.last_name}`,
              customerEmail: customer.email,
              customerPhone: customer.phone || '',
              packageName: booking.packages?.name || 'Adventure Package',
              playDate: activityDate,
              timeSlot: formatTime(booking.time_slot),
              players: booking.guest_count,
              nonPlayers: transport?.non_players || undefined,
              transportType: transport?.transport_type || 'none',
              hotelName: transport?.hotel_name || undefined,
              roomNumber: transport?.room_number || undefined,
              privatePassengers: transport?.private_passengers || undefined,
              addons,
              totalAmount: booking.total_amount,
              paymentStatus: 'confirmed',
            });

            console.log(`Admin notification email sent for ${booking.booking_ref}`);
          } catch (notifError) {
            console.error('Failed to send admin notification:', notifError);
          }
        }
      }
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const bookingId = paymentIntent.metadata?.booking_id;

      if (bookingId) {
        await supabaseAdmin
          .from('bookings')
          .update({ status: 'cancelled' })
          .eq('id', bookingId);
      }
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      const paymentIntentId = charge.payment_intent as string;

      if (paymentIntentId) {
        await supabaseAdmin
          .from('bookings')
          .update({ status: 'refunded' })
          .eq('stripe_payment_intent_id', paymentIntentId);
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
