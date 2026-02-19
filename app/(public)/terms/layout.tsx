import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...generatePageMetadata(
    'Terms & Conditions',
    'Read the terms and conditions for Hanuman World Phuket services. Learn about booking policies, cancellation terms, liability waivers, and safety requirements.',
    '/terms'
  ),
  robots: {
    index: true,
    follow: true,
    noarchive: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
