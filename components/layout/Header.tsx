'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'COMBINED ZIPLINE', href: '/packages/combined' },
  { name: 'ZIPLINE', href: '/packages/zipline' },
  { name: 'ROLLER', href: '/packages/roller' },
  { name: 'SKYWALK', href: '/packages/skywalk' },
  { name: 'SLINGSHOT', href: '/packages/slingshot' },
  { name: 'LUGE', href: '/packages/luge' },
  { name: 'BLOG', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-lg' : 'backdrop-blur-md'
      }`}
      style={{ backgroundColor: 'rgba(26, 35, 126, 0.95)' }}
    >
      {/* Gradient overlay for menu visibility on hero */}
      {!isScrolled && (
        <div 
          className="absolute left-0 right-0 top-0 h-48 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(13, 18, 89, 0.95) 0%, rgba(13, 18, 89, 0.8) 30%, rgba(13, 18, 89, 0.5) 60%, rgba(13, 18, 89, 0.2) 80%, transparent 100%)'
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/HW Logo.png"
              alt="Hanuman World"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-[family-name:var(--font-oswald)] font-normal tracking-wide text-[22px] text-white/90 hover:text-accent transition-colors uppercase"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 rounded-lg font-[family-name:var(--font-oswald)] font-normal tracking-wide text-[20px] text-white uppercase overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c, #f97316)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                  boxShadow: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)',
                }}
              >
                <span className="relative z-10">BOOK NOW</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #fb923c, #f97316, #ea580c)',
                    boxShadow: '0 0 30px rgba(249, 115, 22, 0.7), 0 0 60px rgba(249, 115, 22, 0.5)',
                  }}
                />
              </motion.button>
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-md"
            style={{ backgroundColor: 'rgba(26, 35, 126, 0.98)' }}
          >
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-[family-name:var(--font-oswald)] font-normal tracking-wide text-[30px] text-white/90 hover:text-accent py-2 uppercase"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 px-6 py-3 rounded-lg font-[family-name:var(--font-oswald)] font-normal tracking-wide text-[30px] text-white text-center uppercase"
                style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)',
                }}
              >
                BOOK NOW
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
