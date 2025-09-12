import { Site } from '../../types/Site';

export const bexerBusiness: Site = {
  id: '2',
  nombre: 'Bexer Business',
  url: 'https://bexer-astro.vercel.app',
  imagen: '/images/sites/bexer-business.svg',
  descripcion: 'Bexer Astro - A cutting-edge, versatile theme for businesses. Boasting a sleek design, extensive page collection, and seamless responsiveness, it\'s the perfect solution for SaaS, startups, and agencies.',
  categoria: 'Business',
  etiquetas: ['Business', 'Consulting', 'Multilingual', 'Corporate'],
  destacado: true,
  precio: 77,
  subtitulo: 'Multilingual Business Theme',
  framework: 'React + Tailwind',
  pageSpeed: '2.1.1',
  lanzado: '8 months ago',
  caracteristicasClave: [
    '98/100 Google PageSpeed Score on Desktop',
    'Multilingual Feature included',
    '20+ Unique Pages',
    'Google Map integrated',
    'Search Feature',
    'Taxonomy support',
    'Contact form support',
    'Fully responsive design'
  ],
  promocionBundle: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};