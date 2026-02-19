import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ultimate-zipline-adventure-guide',
    title: 'The Ultimate Zipline Adventure Guide for First-Timers',
    excerpt: 'Everything you need to know before your first zipline experience at Hanuman World.',
    content: `
# The Ultimate Zipline Adventure Guide for First-Timers

Are you planning your first zipline adventure? Here's everything you need to know to make the most of your experience at Hanuman World.

## What to Expect

Ziplining is an exhilarating activity that lets you soar through the jungle canopy, enjoying breathtaking views while experiencing an adrenaline rush like no other.

## Before You Go

### What to Wear
- Comfortable, breathable clothing
- Closed-toe shoes (required)
- Hair tied back if long
- Avoid loose jewelry

### What to Bring
- Sunscreen
- Insect repellent
- Camera with strap
- Positive attitude!

## During Your Adventure

Our professional guides will ensure your safety at every step. Listen carefully to their instructions and don't hesitate to ask questions.

## Tips for First-Timers

1. **Don't look down** if you're nervous - focus on the beautiful scenery ahead
2. **Trust your equipment** - it's inspected daily
3. **Take your time** - there's no rush
4. **Enjoy the moment** - this is a once-in-a-lifetime experience!
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    author: 'Hanuman World Team',
    publishedAt: '2025-01-15',
    category: 'Adventure',
    tags: ['zipline', 'first-time', 'guide', 'tips'],
    readTime: 5,
  },
  {
    id: '2',
    slug: 'why-roller-zipline-unique',
    title: 'Why Our Roller Zipline is Unlike Anything Else in Thailand',
    excerpt: 'Discover what makes our roller zipline the first and only of its kind in Thailand.',
    content: `
# Why Our Roller Zipline is Unlike Anything Else in Thailand

When we designed Hanuman World, we wanted to create something truly unique. That's why we brought Thailand's first roller zipline to Phuket.

## What is a Roller Zipline?

Unlike traditional ziplines where you glide in a straight line, our roller zipline combines the thrill of a roller coaster with the freedom of ziplining.

## The Experience

- **800 meters** of pure excitement
- **Twists and turns** through the jungle
- **Varying speeds** for maximum thrills
- **Stunning views** of the ancient rainforest

## Safety First

Our roller zipline uses state-of-the-art equipment imported from Europe, meeting the highest safety standards.

Come experience this one-of-a-kind adventure!
    `,
    image: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=800&q=80',
    author: 'Hanuman World Team',
    publishedAt: '2025-01-10',
    category: 'Activities',
    tags: ['roller zipline', 'unique', 'thailand', 'adventure'],
    readTime: 4,
  },
  {
    id: '3',
    slug: 'eco-friendly-adventure-park',
    title: 'How Hanuman World Protects the Ancient Rainforest',
    excerpt: 'Learn about our commitment to environmental conservation and sustainable tourism.',
    content: `
# How Hanuman World Protects the Ancient Rainforest

At Hanuman World, we believe adventure and conservation go hand in hand.

## Our Commitment

We operate within a 100-acre protected forest, home to trees over 1,000 years old. Our platforms are built without harming a single tree.

## Sustainable Practices

- **Zero cutting policy** - all platforms wrap around trees
- **Wildlife preservation** - we protect local species
- **Minimal footprint** - solar power and water recycling
- **Education programs** - teaching visitors about conservation

## What You Can Do

When you visit Hanuman World, you're supporting sustainable tourism that protects Thailand's precious ecosystems.
    `,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
    author: 'Hanuman World Team',
    publishedAt: '2025-01-05',
    category: 'Sustainability',
    tags: ['eco-friendly', 'conservation', 'rainforest', 'sustainable'],
    readTime: 4,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
