'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Leaf, Clock, Heart } from 'lucide-react';
import { Container, Section, SectionHeader, Card } from '@/components/ui';
import { staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  {
    icon: Shield,
    title: '100% SAFETY',
    description: 'European CE-certified equipment and professionally trained guides ensure your complete safety throughout the adventure.',
  },
  {
    icon: Award,
    title: '#1 RATED PARK',
    description: 'Consistently rated as one of the top attractions in Phuket with thousands of 5-star reviews on TripAdvisor.',
  },
  {
    icon: Users,
    title: 'FAMILY FRIENDLY',
    description: 'Perfect for all ages from 4 to 80 years old. Our experienced guides make everyone feel comfortable and safe.',
  },
  {
    icon: Leaf,
    title: 'ECO-FRIENDLY',
    description: 'We operate with minimal environmental impact, preserving the ancient rainforest for future generations.',
  },
  {
    icon: Clock,
    title: 'FREE TRANSFERS',
    description: 'Complimentary round-trip hotel transfers included with all packages. Sit back and enjoy the ride!',
  },
  {
    icon: Heart,
    title: 'UNFORGETTABLE',
    description: 'Create memories that last a lifetime. Our unique jungle adventure is unlike anything else in Thailand.',
  },
];

export function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/BG_resize.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/15" />
      
      <Container className="relative z-10">
        <SectionHeader
          title="Why Choose Hanuman World?"
          subtitle="Discover what makes us Thailand's premier adventure destination"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <Card
                hover
                className="h-full text-center group transition-all duration-300 hover:border-accent/30 relative"
              >
                <div className="absolute inset-0 bg-primary-dark/30 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-oswald)]">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
