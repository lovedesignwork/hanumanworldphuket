export interface PackageStats {
  platforms?: number;
  ziplines?: number;
  skyBridge?: number;
  abseilPoints?: number;
  dualZipline?: number;
  spiralStaircase?: number;
  rollerZipline?: number;
  skyWalk?: number;
  totalActivities?: number;
  rollerZiplineMetres?: number;
  skywalkMetres?: number;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string;
  category: 'combined' | 'zipline' | 'roller' | 'skywalk' | 'slingshot';
  image: string;
  gallery: string[];
  features: string[];
  included: string[];
  requirements: string[];
  featured: boolean;
  popular: boolean;
  stats?: PackageStats;
  includesMeal?: boolean;
  includesTransfer?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
  package: string;
  date: string;
  avatar?: string;
}
