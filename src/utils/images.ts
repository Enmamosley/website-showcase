/**
 * Utilidades para manejar imágenes de sitios web
 */

// Ruta base para las imágenes de sitios
const IMAGES_BASE_PATH = '/images/sites/';

/**
 * Obtiene la ruta completa de una imagen de sitio
 * @param imageName - Nombre del archivo de imagen (con extensión)
 * @returns Ruta completa de la imagen
 */
export const getSiteImagePath = (imageName: string): string => {
  return `${IMAGES_BASE_PATH}${imageName}`;
};

/**
 * Genera la ruta de imagen por defecto basada en el ID del sitio
 * @param siteId - ID del sitio
 * @param extension - Extensión del archivo (por defecto 'svg')
 * @returns Ruta de la imagen
 */
export const getDefaultSiteImage = (siteId: string, extension: string = 'svg'): string => {
  return getSiteImagePath(`${siteId}.${extension}`);
};

/**
 * Verifica si una ruta de imagen es local o externa
 * @param imagePath - Ruta de la imagen
 * @returns true si es local, false si es externa
 */
export const isLocalImage = (imagePath: string): boolean => {
  return !imagePath.startsWith('http://') && !imagePath.startsWith('https://');
};

/**
 * Mapeo de IDs de sitios a nombres de archivos de imagen
 * Útil para mantener consistencia en los nombres de archivos
 */
export const SITE_IMAGE_MAP = {
  '1': 'mosley-forty.svg',
  '2': 'bexer-business.svg', 
  '3': 'optimize-saas.svg',
  '4': 'cleaner-services.svg',
  '5': 'cloudpeak-tech.svg',
  '6': 'glasto-startup.svg',
  '7': 'portfolio-creative.svg',
  '8': 'restaurant-pro.svg',
} as const;

/**
 * Obtiene la ruta de imagen para un sitio específico
 * @param siteId - ID del sitio
 * @returns Ruta de la imagen
 */
export const getSiteImage = (siteId: string): string => {
  const imageName = SITE_IMAGE_MAP[siteId as keyof typeof SITE_IMAGE_MAP];
  return imageName ? getSiteImagePath(imageName) : getDefaultSiteImage(siteId);
};
