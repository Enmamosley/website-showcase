import { Site } from '../../types/Site';

export const optimizeSaas: Site = {
  id: '3',
  nombre: 'Optimize SaaS',
  url: 'https://optimize.mosley.mx/',
  imagen: '/images/sites/optimize.webp',
  descripcion: 'Optimize es la elección inteligente para empresas que buscan resultados. Sitio web optimizado para conversiones que transforma visitantes en clientes y mejora tu ROI desde el primer día.',
  categoria: 'Saas',
  etiquetas: ['SaaS', 'Startup'],
  destacado: false,
  precio: 97,
  subtitulo: 'Multilingüe',
  framework: 'Astro + Tailwind',
  pageSpeed: '2.1.2',
  lanzado: '3 months ago',
  caracteristicasClave: [
    '13+ páginas completas',
    '100/100 Google PageSpeed en escritorio',
    'Altamente personalizable (Color, Fuente, Menú, Enlaces sociales, meta tags SEO, etc.)',
    'Configuración preconfigurada para Netlify & Vercel',
    'Funcionalidad de búsqueda',
    'Totalmente responsive en ordenadores de sobremesa, tabletas y móviles',
    'Estructura de carpetas limpia',
    'Entorno de desarrollo sencillo de configurar',
    'Compatible con navegadores modernos',
    'Optimizado para SEO',
    'Animación al desplazarse',
    'Documentación detallada',
  ],
  promocionBundle: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};