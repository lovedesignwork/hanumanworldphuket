'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Phone, Mail, Navigation } from 'lucide-react';
import { Section, Container, SectionHeader, Button } from '@/components/ui';
import { staggerContainer, staggerItem } from '@/lib/animations';

const locationInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '105 Moo 4, Chaofa West Road, Chalong, Muang, Phuket 83130, Thailand',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    content: 'Daily: 8:00 AM - 5:00 PM (Last admission 3:00 PM)',
  },
  {
    icon: Car,
    title: 'Free Hotel Pickup',
    content: 'Complimentary round-trip transfer from all Phuket hotels',
  },
  {
    icon: Phone,
    title: 'Contact',
    content: '+66 76 521 888',
  },
];

const distances = [
  { from: 'Patong Beach', time: '35 mins' },
  { from: 'Phuket Town', time: '20 mins' },
  { from: 'Phuket Airport', time: '45 mins' },
  { from: 'Kata Beach', time: '25 mins' },
  { from: 'Karon Beach', time: '30 mins' },
  { from: 'Chalong Circle', time: '10 mins' },
];

export function Location() {
  return (
    <Section className="relative overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
      <Container>
        <SectionHeader
          title="Find Us"
          subtitle="Conveniently located in the heart of Phuket's jungle"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9551.968669418287!2d98.35056897098228!3d7.875870294150659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050302a98c3f6ff%3A0xc5b7182191c2a787!2sHanuman%20World!5e0!3m2!1sen!2sth!4v1771488315189!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-primary/30 rounded-2xl" />
          </motion.div>

          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {locationInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                  <p className="text-white/70">{info.content}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={staggerItem}
              className="p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-accent" />
                Distance from Popular Areas
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {distances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/70 text-sm">{item.from}</span>
                    <span className="text-accent font-semibold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <a 
                href="https://maps.app.goo.gl/hkNWgQQi1ksvYY37A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
