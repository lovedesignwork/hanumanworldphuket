import { HeroSlideshow, FeaturedPackages, WhyChooseUs, PhotoGallery } from '@/components/home';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />
      <FeaturedPackages />
      <WhyChooseUs />
      <PhotoGallery />
    </main>
  );
}
