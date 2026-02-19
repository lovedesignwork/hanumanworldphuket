'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui';
import { faqs, getFAQCategories } from '@/lib/data/faq';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = getFAQCategories();

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container size="lg">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about your adventure at Hanuman World"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-accent text-white'
                  : 'bg-white/10 text-foreground-muted hover:bg-white/20'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white/10 text-foreground-muted hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-foreground-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
