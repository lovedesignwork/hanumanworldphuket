'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';

// Row 1 images
const scrollingRow1 = [
  '/images/Gallery/Hanuman%20World%20Phuket%201%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%202%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%203%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%204%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%205%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%206%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%207%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%208%20Zipline.JPG',
];

// Row 2 images
const scrollingRow2 = [
  '/images/Gallery/Hanuman%20World%20Phuket%209%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2010%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2011%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2012%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2013%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2014%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2015%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2016%20Zipline.JPG',
];

// Row 3 images
const scrollingRow3 = [
  '/images/Gallery/Hanuman%20World%20Phuket%2017%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2018%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2019%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2020%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%2021%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%2022%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2023%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%2024%20Zipline.JPG',
];

// Row 4 images (mobile only)
const scrollingRow4 = [
  '/images/Gallery/Hanuman%20World%20Phuket%2025%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2026%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2027%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%2028%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%201%20Zipline.JPG',
  '/images/Gallery/Hanuman%20World%20Phuket%202%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%203%20Zipline.jpg',
  '/images/Gallery/Hanuman%20World%20Phuket%204%20Zipline.JPG',
];

export function PhotoGallery() {
  // Mobile image size - shows ~3 images at a time
  const mobileImageSize = 'calc((100vw - 24px) / 3)'; // 3 images with gaps
  
  return (
    <Section className="!py-6 sm:!py-12 overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
      {/* Mobile: 4 scrolling rows with 3 visible images */}
      <div className="md:hidden space-y-2">
        {/* Mobile Row 1 - scroll left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow1, ...scrollingRow1].map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: mobileImageSize, height: mobileImageSize }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Row 2 - scroll right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 28, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow2, ...scrollingRow2].map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: mobileImageSize, height: mobileImageSize }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Row 3 - scroll left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow3, ...scrollingRow3].map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: mobileImageSize, height: mobileImageSize }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Row 4 - scroll right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow4, ...scrollingRow4].map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{ width: mobileImageSize, height: mobileImageSize }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-primary-dark/10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop: 3 scrolling rows */}
      <div className="hidden md:block space-y-4">
        {/* Row 1 - scroll left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow1, ...scrollingRow1].map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative flex-shrink-0 w-[300px] h-[300px] overflow-hidden rounded-2xl"
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

        {/* Row 2 - scroll right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow2, ...scrollingRow2].map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative flex-shrink-0 w-[300px] h-[300px] overflow-hidden rounded-2xl"
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

        {/* Row 3 - scroll left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 42, ease: 'linear' },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...scrollingRow3, ...scrollingRow3].map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative flex-shrink-0 w-[300px] h-[300px] overflow-hidden rounded-2xl"
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
      </div>
    </Section>
  );
}
