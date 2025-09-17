import { Site } from '../../types/Site';

export const neptuneSaas: Site = {
  id: '20',
  nombre: 'Neptune SaaS',
  url: 'https://neptune-iota-ashy.vercel.app/',
  imagen: '/images/sites/neptune.webp',
  descripcion: 'Neptune te da todo lo necesario para lanzar tu negocio online con éxito. Diseño profesional que impresiona a tus clientes y herramientas que convierten visitantes en ventas desde el primer día.',
  categoria: 'Saas',
  etiquetas: ['SaaS', 'Startup', 'Agency'],
  destacado: false,
  precio: 77,
  subtitulo: 'Multilingüe',
  framework: 'Astro + Tailwind',
  pageSpeed: '2.1.0',
  lanzado: '5 month ago',
  caracteristicasClave: [
    'Sitio web que carga súper rápido y mantiene a tus clientes',
    'Diseño que se adapta perfectamente a tu marca',
    'Más de 14 páginas listas para tu negocio',
    'Configuración rápida - online en el mismo día',
    'Localización integrada para encontrar clientes locales',
    'Sistema de búsqueda para productos o servicios',
    'Formularios que capturan más leads calificados',
    'Sección de testimonios para generar confianza',
    'Funciona perfecto en todos los dispositivos',
    'Mejor posicionamiento en Google automáticamente',
    'Instalación simple sin complicaciones técnicas',
    'Soporte completo para cualquier duda',
  ],
  promocionBundle: {
    title: 'Get All Business Themes!',
    description: 'Access our complete business theme collection for only $197!',
    price: '$197',
    buttonText: 'Get Business Bundle',
    link: '/bundles/business-bundle'
  }
};