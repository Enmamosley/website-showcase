import { Site } from '../../types/Site';

export const mosley: Site = {
  id: '1',
  name: 'Forty',
  url: 'https://fortify-astro.vercel.app',
  image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  description: 'Introducing Fortify Astro - a trendy and modern template tailored for security SaaS & Startup. This premium template offers a trendy and visually stunning design, perfect for showcasing your SaaS or Startup products and services.',
  category: 'SaaS',
  tags: ['Security', 'SaaS', 'Modern', 'Professional'],
  featured: true,
  price: 97,
  subtitle: 'Security SaaS & Startup Theme',
  framework: 'React + Tailwind',
  version: '5.4.1',
  themeVersion: '93/100',
  updated: '5 months ago',
  released: '12 months ago',
  documentation: 'https://docs.themefisher.com/fortify-astro/',
  changelog: [
    {
      version: 'v2.1.0',
      date: '04 Mar, 2025',
      changes: ['Updated to Tailwind v4']
    },
    {
      version: 'v2.0.0',
      date: '03 Feb, 2025',
      changes: ['Astro version v5', 'All dependencies updated']
    },
    {
      version: 'v1.1.1',
      date: '05 Nov, 2024',
      changes: ['SASS Warnings Removed', 'Optimized Image Processing with Sharp', 'Package Updates']
    }
  ],
  keyFeatures: [
    '100/10000 Google PageSpeed Score on Desktop',
    'Highly customizable (Color, Font, Menu, Social Links, SEO Meta Tags, etc.)',
    'Built with modern frameworks and best practices',
    'Fully responsive on desktops, tablets, and smartphones',
    'SEO Friendly and optimized for performance',
    'Clean folder structure and easy development setup',
    'Free updates and premium support',
    'Detailed documentation included'
  ],
  testimonial: {
    quote: "Themefisher has been a great supporter and contributor to the Astro ecosystem, providing several high quality popular themes that make it easy to get started with Astro.",
    author: 'Fred K. Schott',
    role: 'CEO of Astro',
    avatar: 'https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg',
    link: 'https://twitter.com/FredKSchott'
  },
  bundlePromo: {
    title: 'Unlock 32+ astro Themes!',
    description: 'Get all current astro themes + All upcoming themes for only $137!',
    price: '$137',
    buttonText: 'pegggo',
    link: '/bundles/astro-bundle'
  }
};