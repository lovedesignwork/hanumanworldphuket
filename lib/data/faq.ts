import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What should I wear?',
    answer: 'Wear comfortable clothing that allows freedom of movement. Closed-toe shoes are required (no sandals or flip-flops). Long pants or shorts are both acceptable. We recommend avoiding loose jewelry.',
    category: 'Preparation',
  },
  {
    id: '2',
    question: 'Is there a weight limit?',
    answer: 'Yes, the weight limit varies by activity. For ziplines: 20-120 kg. For roller zipline: 30-100 kg. For slingshot: 40-100 kg. This is for safety reasons.',
    category: 'Requirements',
  },
  {
    id: '3',
    question: 'What is the age limit?',
    answer: 'Most activities are suitable for ages 4-80. The slingshot requires a minimum age of 12 years. Children under 18 must have parental consent.',
    category: 'Requirements',
  },
  {
    id: '4',
    question: 'Is hotel transfer included?',
    answer: 'Yes! We offer complimentary round-trip hotel transfers for most packages. Transfer is available from Phuket, Kata, Karon, Patong, and nearby areas.',
    category: 'Logistics',
  },
  {
    id: '5',
    question: 'What happens if it rains?',
    answer: 'Light rain usually doesn\'t affect our operations. In case of heavy rain or lightning, activities may be temporarily suspended for safety. We\'ll reschedule or refund as needed.',
    category: 'Weather',
  },
  {
    id: '6',
    question: 'Do I need prior experience?',
    answer: 'No prior experience is needed! Our professional guides will provide full safety briefings and instructions. We\'ve safely guided thousands of first-time visitors.',
    category: 'Experience',
  },
  {
    id: '7',
    question: 'Is it safe?',
    answer: 'Absolutely! We use European CE-certified equipment that\'s inspected daily. All our guides are professionally trained. We\'ve had zero major incidents since opening.',
    category: 'Safety',
  },
  {
    id: '8',
    question: 'Can I bring my camera or phone?',
    answer: 'Yes, but all devices must be securely strapped to your body. We recommend a GoPro or phone with strap. Our staff can take photos and videos for you.',
    category: 'Preparation',
  },
  {
    id: '9',
    question: 'Is food included?',
    answer: 'Meal is included with World A+, B+, C+, and D+ packages. Other packages don\'t include food, but you can purchase meals at our restaurant.',
    category: 'Logistics',
  },
  {
    id: '10',
    question: 'What time should I arrive?',
    answer: 'Please arrive 15-30 minutes before your scheduled time slot for check-in and safety briefing. Time slots are: 8AM, 10AM, 1PM, and 3PM.',
    category: 'Logistics',
  },
  {
    id: '11',
    question: 'Can I cancel or reschedule?',
    answer: 'Yes, you can cancel or reschedule up to 24 hours before your booking for a full refund. Cancellations within 24 hours are non-refundable.',
    category: 'Booking',
  },
  {
    id: '12',
    question: 'Is it suitable for people afraid of heights?',
    answer: 'Many visitors with mild fear of heights complete our courses with support from our guides. However, severe acrophobia may make the experience uncomfortable.',
    category: 'Experience',
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}

export function getFAQCategories(): string[] {
  return [...new Set(faqs.map(faq => faq.category))];
}
