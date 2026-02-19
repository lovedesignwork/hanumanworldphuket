import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import BookingConfirmationEmail from '@/lib/email/templates/BookingConfirmation';

export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  const emailHtml = await render(
    BookingConfirmationEmail({
      customerName: 'John',
      bookingRef: 'HW-00001',
      packageName: 'World A+ (32 Platforms)',
      activityDate: 'Saturday, March 15, 2026',
      timeSlot: '10:00 AM',
      guestCount: 4,
      totalAmount: 11960,
      hotelName: 'Patong Beach Hotel',
      roomNumber: '302',
      hasTransfer: true,
      isPrivateTransfer: false,
      addons: [
        { name: 'Luge 2 Rides', quantity: 2, price: 800 },
        { name: 'Zipline Photos', quantity: 4, price: 770 },
      ],
    })
  );

  return new NextResponse(emailHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
