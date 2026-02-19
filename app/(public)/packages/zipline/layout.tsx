import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'Zipline Packages - 32, 18, 10 Platform Options',
  'Experience pure zipline adventure at Hanuman World Phuket. Choose from 32, 18, or 10 platform courses through the ancient rainforest. Professional guides and safety equipment included.',
  '/packages/zipline',
  '/images/Package image/32PF.JPG'
);

export default function ZiplinePackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
