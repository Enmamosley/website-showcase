import { Site } from '../../types/Site';

export const siriusSaas: Site = {
  id: '18',
  nombre: 'Sirius SaaS',
  url: 'https://sirius-eosin.vercel.app/',
  imagen: '/images/sites/sirius.webp',
  descripcion: 'Sirius es perfecto para startups ambiciosas que quieren brillar. Sitio web que atrae inversores, socios y clientes desde el primer momento con un diseño que inspira confianza.',
  categoria: 'Saas',
  etiquetas: ['SaaS', 'Startup'],
  destacado: false,
  precio: 77,
  subtitulo: 'Multilingüe',
  framework: 'Astro + Tailwind',
  pageSpeed: '2.1.0',
  lanzado: '6 month ago',
  caracteristicasClave: [
    'Más de 17 páginas premium',
    'Puntuación de 98/100 en Google PageSpeed (escritorio)',
    'Altamente personalizable (color, fuente, menú, enlaces sociales, metaetiquetas SEO, etc.)',
    'Configuración preconfigurada para Netlify y Vercel',
    'Shortcodes reutilizables',
    'Sección de video-showcase',
    'Formulario de contacto integrado',
    'Imágenes, CSS y JS optimizados con Astro',
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