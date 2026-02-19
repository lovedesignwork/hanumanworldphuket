'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Container } from '@/components/craft';
import { 
  TreePine, 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Leaf,
  MapPin,
  Clock,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

const stats = [
  { number: '2014', label: 'Established' },
  { number: '1M+', label: 'Happy Visitors' },
  { number: '32', label: 'Zipline Platforms' },
  { number: '3.5km', label: 'Total Zipline Length' },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our equipment meets international safety standards with daily inspections and professional staff training.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We operate in harmony with nature, preserving the rainforest and supporting local conservation efforts.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our team is passionate about creating unforgettable adventure experiences for every guest.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning zipline park recognized for outstanding service and adventure tourism.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Section className="relative bg-gradient-to-b from-[#0d1259] to-[#1a237e] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Hanuman World
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover the magic of Thailand's premier zipline adventure park, 
              where thrilling experiences meet the beauty of ancient rainforests.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#1a237e]">{stat.number}</p>
                <p className="text-slate-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Hanuman World was born from a dream to create an adventure experience 
                  that connects people with the magnificent rainforests of Phuket. Since 
                  opening in 2014, we have welcomed over a million visitors from around 
                  the world.
                </p>
                <p>
                  Our park is named after Hanuman, the monkey god from Hindu mythology, 
                  symbolizing strength, courage, and the spirit of adventure. Just like 
                  Hanuman, our guests soar through the treetops, experiencing the thrill 
                  of flight among the ancient trees.
                </p>
                <p>
                  Set in 100 acres of pristine rainforest, our zipline course features 
                  32 platforms connected by spectacular ziplines, sky bridges, and 
                  abseil points. Every element is designed to provide maximum excitement 
                  while ensuring complete safety.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/zipline-hero.jpg"
                alt="Hanuman World Zipline"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              At Hanuman World, everything we do is guided by our core values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#1a237e]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#1a237e]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#1a237e] py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/70">105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Opening Hours</p>
                    <p className="text-white/70">Daily: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+66 76 391 222</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">info@hanumanworldphuket.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <p className="text-white/80 text-lg mb-6">
                Ready to embark on your adventure? Book your experience today!
              </p>
              <Link href="/booking">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors">
                  Book Now
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
