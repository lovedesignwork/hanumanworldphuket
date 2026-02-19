import { 
  HeroSlideshow, 
  FeaturedPackages, 
  WhyChooseUs, 
  PhotoGallery,
  Testimonials,
  SafetyCertifications,
  Location,
  InstagramFeed,
  CTABanner,
  Partners,
} from '@/components/home';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />
      <FeaturedPackages />
      <WhyChooseUs />
      <PhotoGallery />
      <Testimonials />
      <SafetyCertifications />
      <CTABanner />
      <InstagramFeed />
      <Location />
      <Partners />
    </main>
  );
}
