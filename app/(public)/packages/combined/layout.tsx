import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'World Combo Packages - Ultimate Zipline Experience',
  'Discover our premium World Combo packages at Hanuman World Phuket. World A+, B+, C+, D+ packages with 32-16 platforms, roller zipline, skywalk, meals and round-trip transfers included.',
  '/packages/combined',
  '/images/Package image/32PF.JPG'
);

export default function CombinedPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
