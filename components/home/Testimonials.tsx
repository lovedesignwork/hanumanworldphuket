'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/ui';
import { staggerContainer, staggerItem } from '@/lib/animations';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'Australia',
    rating: 5,
    text: 'Absolutely incredible experience! The ziplines were thrilling and the staff made us feel so safe. The roller zipline is unlike anything I\'ve ever done. A must-do in Phuket!',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Singapore',
    rating: 5,
    text: 'Brought my whole family including my 6-year-old. Everyone had an amazing time! The guides were patient and professional. The views from the skywalk are breathtaking.',
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emma Williams',
    country: 'United Kingdom',
    rating: 5,
    text: 'Best adventure activity in Thailand! The World A+ package is worth every baht. The combination of ziplines, roller coaster, and skywalk is perfect. Highly recommend!',
    avatar: 'EW',
  },
  {
    id: 4,
    name: 'David Mueller',
    country: 'Germany',
    rating: 5,
    text: 'Professional setup, top-notch safety equipment, and incredibly friendly staff. The jungle scenery is stunning. This was the highlight of our Thailand trip!',
    avatar: 'DM',
  },
];

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
      {/* Big rotating circles background */}
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-15 pointer-events-none animate-spin-slow"
        style={{ width: '800px', height: '800px', top: '-200px', left: '-300px' }}
      />
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-15 pointer-events-none animate-spin-slow-reverse"
        style={{ width: '800px', height: '800px', top: '100px', right: '-350px' }}
      />
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-15 pointer-events-none animate-spin-slow"
        style={{ width: '800px', height: '800px', bottom: '-300px', left: '30%' }}
      />
      
      <Container className="relative z-10">
        <SectionHeader
          title="What Our Guests Say"
          subtitle="Join thousands of happy adventurers who have experienced the thrill"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-20 h-20 text-accent/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-[family-name:var(--font-oswald)]">4.9</div>
              <div className="flex gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/60 text-sm mt-1">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-[family-name:var(--font-oswald)]">5,000+</div>
              <p className="text-white/60 text-sm mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-[family-name:var(--font-oswald)]">#1</div>
              <p className="text-white/60 text-sm mt-1">Adventure Park in Phuket</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
