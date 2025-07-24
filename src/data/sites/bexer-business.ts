import { Site } from '../../types/Site';

export const bexerBusiness: Site = {
  id: '2',
  name: 'Bexer Business',
  url: 'https://bexer-astro.vercel.app',
  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  description: 'Bexer Astro - A cutting-edge, versatile theme for businesses. Boasting a sleek design, extensive page collection, and seamless responsiveness, it\'s the perfect solution for SaaS, startups, and agencies.',
  category: 'Business',
  tags: ['Business', 'Consulting', 'Multilingual', 'Corporate'],
  featured: true,
  price: 77,
  subtitle: 'Multilingual Business Theme',
  framework: 'React + Tailwind',
  version: '5.7.5',
  themeVersion: '2.1.1',
  updated: '3 months ago',
  released: '8 months ago',
  documentation: 'https://docs.themefisher.com/bexer-astro/',
  changelog: [
    {
      version: 'v2.1.1',
      date: '28 Apr, 2025',
      changes: ['Multilingual improvements', 'Bug fixes']
    },
    {
      version: 'v2.1.0',
      date: '08 Aug, 2024',
      changes: ['Added multilingual support', 'Search functionality']
    }
  ],
  keyFeatures: [
    '98/100 Google PageSpeed Score on Desktop',
    'Multilingual Feature included',
    '20+ Unique Pages',
    'Google Map integrated',
    'Search Feature',
    'Taxonomy support',
    'Contact form support',
    'Fully responsive design'
  ],
  bundlePromo: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};