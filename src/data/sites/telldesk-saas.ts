import { Site } from '../../types/Site';

export const telldeskSaas: Site = {
  id: '13',
  nombre: 'TellDesk SaaS',
  url: 'https://telldesk.mosley.mx/',
  imagen: '/images/sites/telldesk.webp',
  descripcion: 'TellDesk es la solución ideal para startups que quieren crecer rápido. Sitio web elegante que convierte visitantes en clientes, optimizado para generar más ventas y hacer escalar tu negocio.',
  categoria: 'Saas',
  etiquetas: ['SaaS', 'Startup'],
  destacado: false,
  precio: 97,
  subtitulo: 'Multilingüe',
  framework: 'Astro + Tailwind',
  pageSpeed: '1.1.0',
  lanzado: '6 months ago',
  caracteristicasClave: [
    'Sitio web que carga súper rápido y retiene usuarios',
    'Diseño que se adapta perfectamente a tu marca',
    'Páginas optimizadas para capturar más leads',
    'Mejor posicionamiento en Google automáticamente',
    'Funciona perfecto en móviles y escritorio',
    'Configuración rápida - online en el mismo día',
    'Formularios que convierten visitantes en clientes',
    'Soporte técnico completo incluido',
  ],
  promocionBundle: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};