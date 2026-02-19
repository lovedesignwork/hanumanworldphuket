import { resend, EMAIL_FROM, EMAIL_ADMIN } from './resend';
import NewBookingNotification from './templates/NewBookingNotification';

interface BookingAddon {
  name: string;
  quantity: number;
  price: number;
}

interface BookingNotificationData {
  bookingRef: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  packageName: string;
  playDate: string;
  timeSlot: string;
  players: number;
  nonPlayers?: number;
  transportType: 'none' | 'shared' | 'private';
  hotelName?: string;
  roomNumber?: string;
  privatePassengers?: number;
  addons?: BookingAddon[];
  totalAmount: number;
  paymentStatus: string;
}

export async function sendBookingNotificationEmail(data: BookingNotificationData) {
  const bookedAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  try {
    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_ADMIN,
      subject: `🎉 New Booking: ${data.bookingRef} - ${data.customerName}`,
      react: NewBookingNotification({
        ...data,
        bookedAt,
      }),
    });

    if (result.error) {
      console.error('Error sending booking notification:', result.error);
      throw new Error(result.error.message);
    }

    console.log(`Booking notification email sent for ${data.bookingRef}`);
    return { success: true, emailId: result.data?.id };
  } catch (error) {
    console.error('Error in sendBookingNotificationEmail:', error);
    throw error;
  }
}
