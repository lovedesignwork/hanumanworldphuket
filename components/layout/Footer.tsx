'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui';

const footerLinks = {
  packages: [
    { name: 'World A+', href: '/packages/combined' },
    { name: 'World B+', href: '/packages/combined' },
    { name: 'World C+', href: '/packages/combined' },
    { name: '32 Platform Zipline', href: '/packages/zipline' },
    { name: 'Roller Zipline', href: '/packages/roller' },
    { name: 'Skywalk', href: '/packages/skywalk' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Safety Info', href: '/safety' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/hanumanworld' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/hanumanworld' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/hanumanworld' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ backgroundColor: '#1a237e' }}>
      {/* Big rotating circles */}
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-10 pointer-events-none animate-spin-slow"
        style={{ width: '600px', height: '600px', top: '-200px', left: '-150px' }}
      />
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-10 pointer-events-none animate-spin-slow-reverse"
        style={{ width: '500px', height: '500px', top: '-100px', right: '-100px' }}
      />
      <img 
        src="/images/circlebig.png" 
        alt="" 
        className="absolute opacity-10 pointer-events-none animate-spin-slow"
        style={{ width: '400px', height: '400px', bottom: '-150px', left: '40%' }}
      />
      
      <Container className="relative z-10">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">
              HANUMAN WORLD
            </h3>
            <p className="text-foreground-muted mb-4">
              Thailand&apos;s biggest zipline adventure park located in the heart of Phuket&apos;s ancient rainforest.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-oswald)]">
              PACKAGES
            </h4>
            <ul className="space-y-2">
              {footerLinks.packages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-oswald)]">
              COMPANY
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-oswald)]">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span>105 Moo 4, Chaofa West Road, Chalong, Muang, Phuket 83130</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+66763016110" className="hover:text-accent transition-colors">
                  +66 76 301 6110
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@hanumanworld.com" className="hover:text-accent transition-colors">
                  info@hanumanworld.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground-muted hover:text-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-foreground-muted text-sm">
            &copy; {new Date().getFullYear()} Sky World Adventures Co., Ltd. (Hanuman World). All rights reserved.
          </p>
          <p className="text-center text-foreground-muted text-xs mt-1">
            Online payments processed by Chamnanthang Co., Ltd. (ONEBOOKING)
          </p>
        </div>
      </Container>
    </footer>
  );
}
