# Gestión de Imágenes - Website Showcase

Este documento explica cómo gestionar las imágenes en el proyecto Website Showcase.

## 📁 Estructura de Imágenes

```
public/
└── images/
    └── sites/
        ├── bexer-business.svg
        ├── cleaner-services.svg
        ├── cloudpeak-tech.svg
        ├── glasto-startup.svg
        ├── mosley-forty.svg
        ├── optimize-saas.svg
        ├── portfolio-creative.svg
        └── restaurant-pro.svg
```

## 🎨 Formato de Imágenes

### Imágenes Actuales (SVG)
Las imágenes actuales son **SVG placeholders** generados automáticamente con:
- **Dimensiones**: 800x600px
- **Gradientes**: Colores únicos por categoría
- **Contenido**: Nombre del sitio, subtítulo y tags descriptivos

### Reemplazar con Imágenes Reales

Para usar screenshots reales de los sitios web:

1. **Capturar Screenshots**:
   - Dimensiones recomendadas: **1200x800px** (ratio 3:2)
   - Formato preferido: **WebP** para mejor compresión
   - Formato alternativo: **PNG** o **JPG**

2. **Nombrar Archivos**:
   - Usar el patrón: `{site-name}.{extension}`
   - Ejemplos: `bexer-business.webp`, `mosley-forty.png`

3. **Optimizar Imágenes**:
   ```bash
   # Usando imagemin (recomendado)
   npm install -g imagemin-cli imagemin-webp
   imagemin *.png --out-dir=optimized --plugin=webp
   
   # O usando herramientas online como TinyPNG
   ```

## 🔧 Configuración en el Código

### Rutas de Imágenes
Las imágenes usan rutas absolutas desde la carpeta `public/`:
```typescript
// ✅ Correcto
image: '/images/sites/bexer-business.svg'

// ❌ Incorrecto
image: './public/images/sites/bexer-business.svg'
image: '../public/images/sites/bexer-business.svg'
```

### Utilidades para Imágenes
Se incluye un archivo de utilidades en `src/utils/images.ts`:

```typescript
import { getSiteImage, getSiteImagePath } from '../utils/images';

// Obtener imagen por ID de sitio
const imageUrl = getSiteImage('1'); // Retorna: '/images/sites/mosley-forty.svg'

// Obtener ruta personalizada
const customUrl = getSiteImagePath('mi-imagen.webp');
```

## 🔄 Migración Completada

### Antes (URLs Externas):
```typescript
image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
```

### Después (Imágenes Locales):
```typescript
image: '/images/sites/mosley-forty.svg'
```

### Beneficios de la Migración:
- ✅ **Rendimiento**: Sin dependencia de servicios externos
- ✅ **Confiabilidad**: Imágenes siempre disponibles
- ✅ **Consistencia**: Control total sobre el diseño
- ✅ **SEO**: Mejores tiempos de carga
- ✅ **Offline**: Funciona sin conexión

## 📝 Agregar Nuevos Sitios

Para agregar un nuevo sitio web:

1. **Crear la imagen**:
   ```
   public/images/sites/nuevo-sitio.svg (o .webp/.png)
   ```

2. **Actualizar el mapeo** (opcional):
   ```typescript
   // src/utils/images.ts
   export const SITE_IMAGE_MAP = {
     // ... otros sitios
     '9': 'nuevo-sitio.svg',
   };
   ```

3. **Configurar en el sitio**:
   ```typescript
   // src/data/sites/nuevo-sitio.ts
   export const nuevoSitio: Site = {
     id: '9',
     name: 'Nuevo Sitio',
     image: '/images/sites/nuevo-sitio.svg',
     // ... otras propiedades
   };
   ```

## 🎯 Mejores Prácticas

- **Nombrado**: Usar kebab-case para nombres de archivos
- **Tamaño**: Mantener archivos < 500KB para mejor rendimiento
- **Formatos**: Preferir WebP > PNG > JPG para web
- **Alt Text**: Siempre incluir descripción en el componente
- **Lazy Loading**: Ya implementado en `SiteCard.tsx`
- **Responsive**: Las imágenes se adaptan automáticamente

## 🔍 Troubleshooting

### Imagen no se muestra:
1. Verificar que el archivo existe en `public/images/sites/`
2. Comprobar que la ruta sea absoluta (`/images/...`)
3. Verificar permisos de archivo
4. Limpiar caché del navegador

### Imagen se ve distorsionada:
1. Verificar dimensiones originales
2. Ajustar CSS si es necesario
3. Considerar usar `object-fit: cover` o `contain`
