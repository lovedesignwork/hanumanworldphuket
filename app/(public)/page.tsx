import { Metadata } from 'next';
import { 
  HeroSlideshow, 
  FeaturedPackages, 
  WhyChooseUs, 
  PhotoGallery,
  Testimonials,
  SafetyCertifications,
  Location,
  InstagramFeed,
  Partners,
} from '@/components/home';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...generatePageMetadata(
    `${siteConfig.name} - #1 Zipline Adventure in Thailand`,
    'Experience Thailand\'s biggest zipline adventure at Hanuman World Phuket. Over 30 platforms, 16 ziplines, roller zipline, skywalk and more through the ancient 10 million year old rainforest. Book your adventure today!',
    '/',
  ),
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />
      <FeaturedPackages />
      <WhyChooseUs />
      <PhotoGallery />
      <Testimonials />
      <SafetyCertifications />
      <InstagramFeed />
      <Location />
      <Partners />
    </main>
  );
}
