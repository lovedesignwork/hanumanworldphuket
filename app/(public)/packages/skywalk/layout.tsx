import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Skywalk - Scenic Rainforest Canopy Walk',
  'Experience the breathtaking Skywalk at Hanuman World Phuket. Walk 500 meters through the rainforest canopy on elevated platforms. Perfect for families and nature lovers.',
  '/packages/skywalk',
  '/images/Package image/SKYWALK.JPG'
);

export default function SkywalkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
