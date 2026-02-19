import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Roller Zipline - Unique 420m Downhill Experience',
  'Try the unique Roller Zipline at Hanuman World Phuket. Glide 420 meters downhill on a wheeled trolley system through the rainforest. An unforgettable thrill for adventure seekers.',
  '/packages/roller',
  '/images/Package image/ROLLER.JPG'
);

export default function RollerZiplineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
