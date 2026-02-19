'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Clock, Shield, Star } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { getPackageById } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const highlights = [
  {
    icon: Zap,
    title: 'FIRST IN THAILAND',
    description: 'Experience the only roller zipline in Thailand - a unique combination of roller coaster and zipline.',
  },
  {
    icon: Clock,
    title: '800 METRES',
    description: 'Glide through 800 metres of thrilling track weaving through the ancient rainforest canopy.',
  },
  {
    icon: Shield,
    title: '100% SAFE',
    description: 'World-class Petzl equipment and trained guides ensure your safety throughout the ride.',
  },
  {
    icon: Star,
    title: 'UNIQUE EXPERIENCE',
    description: 'Feel the rush of speed as you twist and turn through the jungle like never before.',
  },
];

export default function RollerZiplinePage() {
  const pkg = getPackageById('roller-zipline');

  if (!pkg) return null;

  return (
    <main className="min-h-screen pt-20">
      {/* Section 1: Hero with Video Background */}
      <section className="relative overflow-hidden" style={{ height: '85vh', minHeight: '600px' }}>
        {/* YouTube Video Background - Full Screen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/zNNzS0o-9Gw?autoplay=1&mute=1&loop=1&playlist=zNNzS0o-9Gw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ 
              border: 0,
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
            }}
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#0d1259]/50" />
          
          {/* Bottom gradient for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1259]/70 via-transparent to-[#0d1259]" />
        </div>
        
        {/* Big Circle Background */}
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[-10%] right-[-15%] animate-spin-slow z-10"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[600px] h-[600px] opacity-10 pointer-events-none object-contain bottom-[-20%] left-[-10%] animate-spin-slow-reverse z-10"
        />
        
        <Container className="relative z-20 py-16 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            <Badge variant="accent" className="mb-4">UNIQUE IN THAILAND</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 tracking-wide">
              ROLLER ZIPLINE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              The ultimate jungle thrill - combine the excitement of a roller coaster with the freedom of ziplining through Thailand&apos;s ancient rainforest.
            </p>
          </motion.div>

          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-[3px] rounded-2xl animated-silver-border max-w-5xl mx-auto"
          >
            <div className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-primary/90 to-primary-dark">
              {/* Image */}
              <div className="relative h-80 lg:h-auto lg:w-[50%] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                />
                <div className="absolute top-4 left-4">
                  <Badge>{pkg.duration}</Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 lg:p-10 flex flex-col justify-center lg:w-[50%] animated-card-bg-turquoise-mint overflow-hidden">
                <img 
                  src="/images/circlebg.png" 
                  alt="" 
                  className="absolute opacity-10 pointer-events-none animate-circle-orbit-1"
                  style={{ width: '350px', height: '350px', top: '-50px', right: '-50px' }}
                />
                
                <div className="relative z-10">
                  <div className="flex justify-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">800</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">METRES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">1</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">UNIQUE TRACK</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">∞</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">THRILLS</div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-center mb-6">
                    Soar through the treetops on a specially designed track that twists, turns, and dips like a roller coaster - all while suspended above the jungle floor.
                  </p>
                  
                  <Link href="/contact" className="block">
                    <div className="p-[2px] rounded-xl transition-all duration-300 hover:scale-105 animated-silver-border-btn">
                      <button className="relative z-10 w-full flex items-center justify-center gap-3 py-4 rounded-xl animated-btn-turquoise-mint text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                        <span className="font-[family-name:var(--font-oswald)] font-normal text-[23px]">
                          BOOK NOW: {formatPrice(pkg.price)} / PERSON
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Section 2: Highlights */}
      <Section className="relative overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[700px] h-[700px] opacity-10 pointer-events-none object-contain top-[10%] left-[-15%] animate-spin-slow"
        />
        
        <Container className="relative z-10">
          <SectionHeader
            title="Why Roller Zipline?"
            subtitle="An experience you won't find anywhere else in Thailand"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-oswald)]">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Section 3: SEO Content */}
      <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-oswald)] font-medium text-white mb-6 text-center">
              THAILAND'S FIRST & ONLY ROLLER ZIPLINE
            </h2>
            <div className="prose prose-lg prose-invert mx-auto text-white/80 space-y-4">
              <p>
                Experience the <strong className="text-white">first roller zipline in Thailand</strong> exclusively at Hanuman World Phuket. This revolutionary attraction combines the adrenaline rush of a roller coaster with the exhilaration of ziplining through an ancient rainforest, creating an <strong className="text-white">adventure experience unlike any other in Southeast Asia</strong>.
              </p>
              <p>
                Our <strong className="text-white">800-metre roller zipline track</strong> weaves through the pristine jungle canopy, featuring thrilling dips, curves, and turns that will have your heart racing. Unlike traditional ziplines where you simply glide, the roller zipline allows you to experience controlled speed variations and dynamic movements - it's the closest thing to flying through the trees!
              </p>
              <p>
                The <strong className="text-white">Hanuman World Roller Zipline</strong> is engineered with world-class Petzl safety equipment from France, ensuring a completely secure yet thrilling ride. Our professionally trained guides accompany every adventure, making this <strong className="text-white">Phuket attraction</strong> perfect for both first-timers and experienced thrill-seekers aged 8 to 60.
              </p>
              <p>
                Located in the heart of Phuket's protected rainforest, just 20 minutes from Phuket Town, the roller zipline offers a perfect escape from the beaches for an unforgettable <strong className="text-white">jungle adventure in Thailand</strong>. Combine it with our Skywalk or full zipline courses for the ultimate Hanuman World experience. Free hotel transfers available from Patong, Kata, Karon, and all major areas.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 4: CTA */}
      <Section 
        className="relative overflow-hidden py-20" 
        style={{ 
          backgroundImage: 'url(/images/Hero%20Image/Roller.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d1259]/70" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 tracking-wide">
              READY TO RIDE?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto mb-8">
              Don&apos;t miss the chance to experience Thailand&apos;s only roller zipline. Book your adventure today!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  BOOK NOW
                </button>
              </Link>
              <Link href="/packages/combined">
                <button className="px-10 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xl transition-all duration-300 border border-white/20">
                  VIEW ALL PACKAGES
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
