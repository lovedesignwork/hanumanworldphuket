import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'About Us - Our Story & Mission',
  'Learn about Hanuman World Phuket, Thailand\'s premier zipline adventure park. Discover our mission, values, commitment to safety, and environmental sustainability.',
  '/about'
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
