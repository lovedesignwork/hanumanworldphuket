import { Metadata } from 'next';

export const siteConfig = {
  name: 'Hanuman World Phuket',
  description: 'Experience the ultimate zipline adventure in Phuket, Thailand. Soar through the rainforest canopy with 32 platforms, roller ziplines, skywalks, and more. Book your adventure today!',
  url: 'https://hanumanworldphuket.com',
  ogImage: '/images/og-image.jpg',
  locale: 'en_US',
  creator: 'Hanuman World',
  keywords: [
    'zipline phuket',
    'hanuman world',
    'phuket adventure',
    'thailand zipline',
    'rainforest zipline',
    'phuket attractions',
    'things to do in phuket',
    'roller zipline',
    'skywalk phuket',
    'slingshot phuket',
    'eco adventure phuket',
    'family activities phuket',
    'canopy tour phuket',
    'zipline tour thailand',
    'phuket outdoor activities',
  ],
  social: {
    facebook: 'https://www.facebook.com/hanumanworldphuket',
    instagram: 'https://www.instagram.com/hanumanworldphuket',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g1215780-d4788183-Reviews-Hanuman_World-Kathu_Phuket.html',
  },
  contact: {
    email: 'info@hanumanworldphuket.com',
    phone: '+66 76 391 222',
    address: '105 Moo 4, Soi Namtok Kathu, Wichit, Mueang Phuket, Phuket 83120, Thailand',
  },
  geo: {
    latitude: 7.9136,
    longitude: 98.3431,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - #1 Zipline Adventure in Thailand`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
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
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - #1 Zipline Adventure in Thailand`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - #1 Zipline Adventure in Thailand`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@hanumanworld',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
