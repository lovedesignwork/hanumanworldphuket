import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: {
    default: 'Hanuman World Phuket | Thailand\'s Biggest Zipline Adventure',
    template: '%s | Hanuman World Phuket',
  },
  description: 'Experience Thailand\'s biggest zipline adventure at Hanuman World Phuket. Over 30 platforms, 16 ziplines, roller zipline, skywalk & more through the ancient rainforest.',
  keywords: ['zipline', 'phuket', 'adventure', 'thailand', 'hanuman world', 'roller zipline', 'skywalk', 'slingshot'],
  authors: [{ name: 'Hanuman World Phuket' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hanumanworldphuket.com',
    siteName: 'Hanuman World Phuket',
    title: 'Hanuman World Phuket | Thailand\'s Biggest Zipline Adventure',
    description: 'Experience Thailand\'s biggest zipline adventure at Hanuman World Phuket.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanuman World Phuket | Thailand\'s Biggest Zipline Adventure',
    description: 'Experience Thailand\'s biggest zipline adventure at Hanuman World Phuket.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
