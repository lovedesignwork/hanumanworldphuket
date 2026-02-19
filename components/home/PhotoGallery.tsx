'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';

const galleryImages = [
  [
    '/images/Gallery/Hanuman%20World%20Phuket%201%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%202%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%203%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%204%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%205%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%206%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%207%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%208%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%209%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2010%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2011%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2012%20Zipline.JPG',
  ],
  [
    '/images/Gallery/Hanuman%20World%20Phuket%2013%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2014%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2015%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2016%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2017%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2018%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2019%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2020%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%2021%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%2022%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2023%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%2024%20Zipline.JPG',
  ],
  [
    '/images/Gallery/Hanuman%20World%20Phuket%2025%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2026%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2027%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2028%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2029%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2030%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%2031%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%2032%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%2033%20Zipline.jpeg',
    '/images/Gallery/Hanuman%20World%20Phuket%2034%20Zipline.jpg',
    '/images/Gallery/Hanuman%20World%20Phuket%201%20Zipline.JPG',
    '/images/Gallery/Hanuman%20World%20Phuket%202%20Zipline.jpg',
  ],
];

export function PhotoGallery() {
  return (
    <Section className="!py-0 !pt-[30px] overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
      <div className="space-y-4">
        {galleryImages.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: rowIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: rowIndex === 0 ? 42 : rowIndex === 1 ? 137 : 47,
                  ease: 'linear',
                },
              }}
              style={{
                width: 'fit-content',
              }}
            >
              {[...row, ...row].map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative flex-shrink-0 w-[25vw] h-[280px] overflow-hidden rounded-2xl"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110 rounded-2xl"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 hover:bg-transparent transition-colors duration-300 rounded-2xl" />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
