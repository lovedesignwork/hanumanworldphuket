'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, TreePine, Camera, Heart } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { getPackageById } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const highlights = [
  {
    icon: Eye,
    title: 'PANORAMIC VIEWS',
    description: 'Walk above the treetops and enjoy 360° views of the stunning Phuket rainforest.',
  },
  {
    icon: TreePine,
    title: '300 METRES',
    description: 'Traverse 300 metres of elevated walkways suspended high above the jungle floor.',
  },
  {
    icon: Camera,
    title: 'PHOTO PERFECT',
    description: 'Capture breathtaking photos from unique vantage points among the ancient trees.',
  },
  {
    icon: Heart,
    title: 'ALL AGES',
    description: 'Perfect for all ages and fitness levels - experience nature like never before.',
  },
];

export default function SkywalkPage() {
  const pkg = getPackageById('skywalk');

  if (!pkg) return null;

  return (
    <main className="min-h-screen pt-20">
      {/* Section 1: Hero with Video Background */}
      <section className="relative overflow-hidden" style={{ height: '85vh', minHeight: '600px' }}>
        {/* YouTube Video Background - Full Screen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/sK962ozTsD4?autoplay=1&mute=1&loop=1&playlist=sK962ozTsD4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
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
            <Badge variant="accent" className="mb-4">WALK AMONG THE CLOUDS</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 tracking-wide">
              SKYWALK
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Experience the magic of walking through the treetops on elevated walkways with breathtaking views of the ancient rainforest.
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
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">300</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">METRES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">40</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">METRES HIGH</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white font-[family-name:var(--font-oswald)]">360°</div>
                      <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">VIEWS</div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-center mb-6">
                    Walk along suspended bridges and platforms high above the forest floor. Perfect for nature lovers and photographers seeking unique perspectives.
                  </p>
                  
                  <Link href={`/booking?package=${pkg.id}`} className="block">
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
      <Section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1259 0%, #1a3a2a 25%, #0d4a4a 50%, #2a1a5c 75%, #0d1259 100%)' }}>
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[700px] h-[700px] opacity-10 pointer-events-none object-contain top-[10%] right-[-15%] animate-spin-slow"
        />
        
        <Container className="relative z-10">
          <SectionHeader
            title="Why Skywalk?"
            subtitle="A peaceful walk with incredible views"
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
                <div className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-20 h-20 text-accent" />
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

      {/* SEO Content Section */}
      <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-oswald)] font-medium text-white mb-6 text-center">
              PHUKET'S PREMIER TREETOP WALKWAY EXPERIENCE
            </h2>
            <div className="prose prose-lg prose-invert mx-auto text-white/80 space-y-4">
              <p>
                Discover the ultimate <strong className="text-white">Skywalk experience in Phuket</strong> at Hanuman World, Thailand's most spectacular rainforest adventure park. Our elevated walkway system takes you on an unforgettable journey through the ancient jungle canopy, offering breathtaking panoramic views that you won't find anywhere else in Southern Thailand.
              </p>
              <p>
                The <strong className="text-white">Hanuman World Skywalk</strong> features 300 metres of suspended bridges and platforms, reaching heights of up to 40 metres above the forest floor. This <strong className="text-white">eco-friendly attraction in Phuket</strong> is perfect for nature lovers, families, and photographers seeking unique perspectives of the tropical rainforest ecosystem.
              </p>
              <p>
                Unlike traditional <strong className="text-white">canopy walks in Thailand</strong>, our Skywalk combines world-class safety standards with an immersive nature experience. Whether you're looking for a peaceful escape from the beaches or an exciting family activity, the Skywalk offers a perfect blend of adventure and tranquility in the heart of Phuket's pristine jungle.
              </p>
              <p>
                Located just 20 minutes from Phuket Town, Hanuman World is easily accessible from all major tourist areas including Patong, Kata, and Karon. Our <strong className="text-white">Phuket treetop adventure</strong> includes free hotel transfers, making it the most convenient way to experience the island's natural beauty from above.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 3: CTA */}
      <Section 
        className="relative overflow-hidden py-20" 
        style={{ 
          backgroundImage: 'url(/images/Hero%20Image/Skywalk.jpg)',
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
              READY TO WALK THE SKY?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto mb-8">
              Experience the serenity of walking among the treetops. Perfect for nature lovers of all ages!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={`/booking?package=${pkg.id}`}>
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
