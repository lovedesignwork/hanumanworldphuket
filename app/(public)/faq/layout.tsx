import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata(
  'FAQ - Frequently Asked Questions',
  'Find answers to frequently asked questions about Hanuman World Phuket. Learn about booking, safety requirements, what to bring, age/weight limits, cancellation policy, and more.',
  '/faq'
);

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
