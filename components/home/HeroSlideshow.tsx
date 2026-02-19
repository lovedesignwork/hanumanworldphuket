'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';

const slides = [
  {
    id: 1,
    image: '/images/Hero%20Image/Zipline.jpg',
    title: "Thailand's Biggest",
    subtitle: 'ZIPLINE ADVENTURE',
    description: 'Experience the ultimate jungle adventure with over 30 platforms and 16 ziplines through the ancient rainforest.',
  },
  {
    id: 2,
    image: '/images/Hero%20Image/Roller.jpg',
    title: 'First in Thailand',
    subtitle: 'UNIQUE ROLLER ZIPLINE',
    description: 'Experience the thrilling roller coaster zipline - a unique combination of speed and excitement through the treetops.',
  },
  {
    id: 3,
    image: '/images/Hero%20Image/Skywalk.jpg',
    title: 'Walk Among the Clouds',
    subtitle: 'BREATHTAKING SKYWALK',
    description: 'Elevated walkways offer stunning panoramic views of the Phuket jungle. Perfect for nature lovers and photographers.',
  },
  {
    id: 4,
    image: '/images/Hero%20Image/Slingshot2.jpg',
    title: 'Maximum Adrenaline',
    subtitle: 'EXTREME SLINGSHOT',
    description: 'Feel the ultimate rush as you are launched into the jungle canopy. For true thrill-seekers only!',
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-primary-dark via-primary-dark/60 to-transparent z-10 pointer-events-none" />
      <div 
        className="absolute bottom-0 left-0 right-0 h-56 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0d1259 0%, #0d1259 10%, rgba(13, 18, 89, 0.9) 30%, rgba(13, 18, 89, 0.5) 60%, rgba(13, 18, 89, 0.2) 85%, transparent 100%)'
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)',
            }}
          >
            <p 
              className="text-accent font-semibold text-lg mb-2"
              style={{ textShadow: '0 0 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.9), 0 8px 40px rgba(0,0,0,0.8)' }}
            >
              {slides[currentSlide].title}
            </p>
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-oswald)] tracking-wide"
              style={{ textShadow: '0 0 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 6px 40px rgba(0,0,0,0.95), 0 12px 60px rgba(0,0,0,0.9), 0 0 100px rgba(0,0,0,0.7)' }}
            >
              {slides[currentSlide].subtitle}
            </h1>
            <p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              style={{ textShadow: '0 0 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.9), 0 8px 40px rgba(0,0,0,0.8)' }}
            >
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4" style={{ filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.9)) drop-shadow(0 8px 20px rgba(0,0,0,0.8))' }}>
              <Link href="/booking">
                <Button size="lg">Book Your Adventure</Button>
              </Link>
              <Link href="/packages/combined">
                <Button variant="secondary" size="lg">Explore Packages</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-8 z-20 hidden lg:block"
      >
        <div className="text-white/60 text-sm">
          {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
        </div>
      </motion.div>
    </section>
  );
}
