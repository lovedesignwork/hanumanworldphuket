import { Metadata } from 'next';

const baseUrl = 'https://hanumanworldphuket.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Hanuman World Phuket | Thailand's Biggest Zipline Adventure",
    template: '%s | Hanuman World Phuket',
  },
  description:
    "Experience Thailand's biggest zipline adventure at Hanuman World Phuket. Over 30 platforms, 16 ziplines, roller zipline, skywalk & more through the ancient rainforest.",
  keywords: [
    'zipline',
    'phuket',
    'adventure',
    'thailand',
    'hanuman world',
    'roller zipline',
    'skywalk',
    'slingshot',
    'zipline phuket',
    'phuket attractions',
    'things to do in phuket',
  ],
  authors: [{ name: 'Hanuman World Phuket' }],
  creator: 'Hanuman World Phuket',
  publisher: 'Hanuman World Phuket',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Hanuman World Phuket',
    title: "Hanuman World Phuket | Thailand's Biggest Zipline Adventure",
    description:
      "Experience Thailand's biggest zipline adventure at Hanuman World Phuket.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hanuman World Phuket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hanuman World Phuket | Thailand's Biggest Zipline Adventure",
    description:
      "Experience Thailand's biggest zipline adventure at Hanuman World Phuket.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'google-site-verification-code',
  },
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hanuman World Phuket',
    url: baseUrl,
    logo: `${baseUrl}/images/HW Logo.png`,
    sameAs: [
      'https://facebook.com/hanumanworld',
      'https://instagram.com/hanumanworld',
      'https://youtube.com/hanumanworld',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-76-301-6110',
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: ['English', 'Thai', 'Chinese', 'Russian'],
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Hanuman World Phuket',
    description:
      "Thailand's biggest zipline adventure park featuring 32 platforms, 16 ziplines, roller zipline, skywalk, and slingshot through ancient rainforest.",
    url: baseUrl,
    telephone: '+66-76-301-6110',
    email: 'info@hanumanworld.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '105 Moo 4, Chaofa West Road',
      addressLocality: 'Chalong',
      addressRegion: 'Phuket',
      postalCode: '83130',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 7.8528,
      longitude: 98.3264,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '฿350 - ฿3,490',
    image: `${baseUrl}/images/og-image.jpg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '5000',
    },
  };
}
