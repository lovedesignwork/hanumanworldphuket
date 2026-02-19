import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Book Your Adventure - Online Reservation',
  'Book your zipline adventure at Hanuman World Phuket online. Select your package, date, time, and add extras. Instant confirmation and free hotel pickup included.',
  '/booking'
);

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
