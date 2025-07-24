export interface Site {
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  price: number;
  subtitle: string;
  framework: string;
  version: string;
  themeVersion: string;
  updated: string;
  released: string;
  documentation: string;
  changelog: ChangelogEntry[];
  keyFeatures: string[];
  testimonial?: Testimonial;
  bundlePromo?: BundlePromo;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  link?: string;
}

export interface BundlePromo {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  link: string;
}

export interface NavigationState {
  view: 'catalog' | 'detail';
  selectedSite?: Site;
}