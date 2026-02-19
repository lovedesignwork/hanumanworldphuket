import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Slingshot - Extreme Drop Experience',
  'Feel the ultimate adrenaline rush with the Slingshot at Hanuman World Phuket. Experience a thrilling 40-meter freefall drop through the rainforest. Not for the faint of heart!',
  '/packages/slingshot',
  '/images/Package image/SLINGSHOT.JPG'
);

export default function SlingshotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
