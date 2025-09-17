import { Site } from '../../types/Site';

export const pinwheelSaas: Site = {
  id: '17',
  nombre: 'Pinwheel SaaS',
  url: 'https://pinwheel-tau.vercel.app/',
  imagen: '/images/sites/pinwheel.webp',
  descripcion: 'Pinwheel es perfecto para startups innovadoras que quieren destacar. Diseño dinámico que captura la atención de inversores y clientes, impulsando el crecimiento de tu negocio.',
  categoria: 'Saas',
  etiquetas: ['SaaS', 'Business'],
  destacado: false,
  precio: 17,
  subtitulo: 'Multilingüe',
  framework: 'Astro + Tailwind',
  pageSpeed: '3.2.0',
  lanzado: '1 month ago',
  caracteristicasClave: [
    '17+ páginas prediseñadas',
    '95+ Google PageSpeed Score', 
    'Altamente personalizable (Color, Fuente, Menú, Enlaces sociales, metaetiquetas SEO, etc.)',
    'Configuración de Netlify preconfigurada',
    'Integración con Google Tag Manager', 
    'Totalmente responsive en escritorio, tabletas y móviles',
    'SEO Friendly',
    'Estructura de carpetas limpia',
    'Entorno de desarrollo sencillo de configurar',
    'Compatible con todos los navegadores modernos',
    'Iconos Font Awesome incluidos',
  ],
  promocionBundle: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};