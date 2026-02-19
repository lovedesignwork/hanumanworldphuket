import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Luge Ride - Exciting Downhill Adventure',
  'Race down the luge track at Hanuman World Phuket. Fun for all ages with multiple rides available. Control your own speed on this exciting gravity-powered ride.',
  '/packages/luge',
  '/images/luge.jpg'
);

export default function LugeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
