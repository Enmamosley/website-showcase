import { Site } from '../../types/Site';

// Importación automática de todos los sitios
const siteModules = import.meta.glob('./*.ts', { eager: true });

// Extraer todos los sitios exportados de los módulos
export const sites: Site[] = [];

Object.values(siteModules).forEach((module) => {
  // Buscar todas las exportaciones que sean objetos Site válidos
  Object.values(module as Record<string, unknown>).forEach((exportedValue) => {
    if (exportedValue && 
        typeof exportedValue === 'object' && 
        exportedValue !== null &&
        'id' in exportedValue &&
        'nombre' in exportedValue && 
        'url' in exportedValue) {
      sites.push(exportedValue as Site);
    }
  });
});

// Ordenar sitios por ID para consistencia
sites.sort((a, b) => a.id.localeCompare(b.id));

