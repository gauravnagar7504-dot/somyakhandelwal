export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: 'graphic-design' | 'social-media' | 'websites' | 'content-seo';
  timeline: string;
  role: string;
  client: string;
  image: string;
  brief: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  learnings: string;
  stats?: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  discipline: string;
  categoryName: string;
  description: string;
  shortDescription?: string;
  deliverables: string[];
  approach: string[];
  image: string;
  imageAlt: string;
  badge: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  services: string[];
  budget: string;
  details: string;
  honeypot: string; // Anti-spam field
}
