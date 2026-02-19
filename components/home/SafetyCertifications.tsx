'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, HeartPulse, HardHat, CheckCircle } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/ui';
import { staggerContainer, staggerItem } from '@/lib/animations';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'International Safety Standards',
    description: 'All equipment meets European EN 15567 safety standards for adventure parks.',
  },
  {
    icon: HardHat,
    title: 'Premium Equipment',
    description: 'We use only top-quality harnesses, helmets, and carabiners from leading manufacturers.',
  },
  {
    icon: Users,
    title: 'Trained Professionals',
    description: 'Our guides undergo rigorous training and certification programs annually.',
  },
  {
    icon: HeartPulse,
    title: 'First Aid Ready',
    description: 'Certified first aid personnel and emergency protocols always on standby.',
  },
  {
    icon: Award,
    title: 'Regular Inspections',
    description: 'Daily equipment checks and monthly third-party safety audits ensure reliability.',
  },
  {
    icon: CheckCircle,
    title: 'Full Insurance Coverage',
    description: 'Comprehensive insurance coverage included for all guests during activities.',
  },
];

export function SafetyCertifications() {
  return (
    <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
      <Container>
        <SectionHeader
          title="Your Safety is Our Priority"
          subtitle="World-class safety standards and equipment for your peace of mind"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-oswald)]">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <img src="/images/petzl.png" alt="Petzl Certified" className="w-56 h-56 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-oswald)]">
                WORLD-CLASS EQUIPMENT
              </h3>
              <p className="text-white/70 max-w-2xl">
                We exclusively use Petzl - the world leader in climbing and safety equipment. 
                Every harness, carabiner, and safety device meets the highest international standards, 
                ensuring your adventure is both thrilling and completely secure.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
