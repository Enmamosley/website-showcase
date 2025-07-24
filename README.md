# Website Showcase - Catálogo Moderno de Sitios Web

Una aplicación moderna de catálogo de sitios web construida con React, TypeScript y Tailwind CSS. Permite explorar, filtrar y visualizar sitios web con previsualizaciones en vivo y información detallada.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18 o superior)
- **npm** (viene incluido con Node.js)
- **Git** (para clonar el repositorio)

### Verificar instalaciones

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
# Clonar el proyecto
git clone https://github.com/Enmamosley/website-showcase

# Navegar al directorio del proyecto
cd website-showcase
```

### 2. Instalar dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

El proyecto se abrirá automáticamente en tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
- Inicia el servidor de desarrollo
- La página se recarga automáticamente cuando haces cambios
- Errores de lint se muestran en la consola

### `npm run build`
- Construye la aplicación para producción en la carpeta `dist`
- Optimiza la construcción para el mejor rendimiento
- Los archivos están minificados y listos para despliegue

### `npm run preview`
- Sirve la versión de producción localmente
- Útil para probar la build antes del despliegue
- Ejecuta `npm run build` primero

### `npm run lint`
- Ejecuta ESLint para encontrar problemas en el código
- Ayuda a mantener la calidad del código

## 🛠️ Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Catalog.tsx     # Vista principal del catálogo con filtros
│   ├── SiteCard.tsx    # Tarjeta individual de sitio web
│   ├── SiteDetail.tsx  # Vista detallada con preview en vivo
│   ├── SiteDetailSidebar.tsx # Sidebar con información del sitio
│   ├── PricingCard.tsx # Componente de planes de precios
│   └── Footer.tsx      # Footer de la aplicación
├── data/               # Datos de los sitios web
│   ├── sites/          # Archivos individuales de cada sitio
│   │   ├── index.ts    # Importación automática de sitios
│   │   └── *.ts        # Archivos de sitios individuales
│   └── plans.ts        # Planes de precios
├── types/              # Definiciones de TypeScript
│   ├── Site.ts         # Interfaces de sitios web
│   └── Plan.ts         # Interfaces de planes
├── App.tsx             # Componente principal con navegación
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Lucide React** - Iconos modernos y consistentes

## ✨ Características Principales

### 🏠 Vista de Catálogo
- **Búsqueda avanzada** - Busca por nombre, descripción o tags
- **Filtros por categoría** - SaaS, Business, Portfolio, etc.
- **Sitios destacados** - Sección especial para sitios featured
- **Vistas múltiples** - Grid y lista
- **Diseño responsive** - Optimizado para todos los dispositivos

### 🔍 Vista de Detalles
- **Preview en vivo** - Visualización del sitio web real en iframe
- **Vistas responsivas** - Desktop, Tablet y Mobile
- **Información completa** - Descripción, características, changelog
- **Sidebar informativo** - Datos técnicos y testimonios
- **Formulario de contacto** - Modal para solicitar proyectos personalizados
- **Planes de precios** - Sección integrada con opciones de compra

### 🎯 Funcionalidades Avanzadas
- **Navegación con historial** - URLs amigables y navegación del navegador
- **Importación automática** - Sistema que detecta nuevos sitios automáticamente
- **Testimonios integrados** - Reseñas de usuarios reales
- **Tags dinámicos** - Sistema de etiquetado flexible
- **Changelog detallado** - Historial de versiones y cambios

## 🔧 Personalización

### Agregar nuevos sitios

El sistema importa automáticamente todos los sitios. Solo necesitas:

1. **Crear un nuevo archivo** en `src/data/sites/`
2. **Seguir la estructura** definida en `src/types/Site.ts`
3. **El sistema lo detectará automáticamente** - No necesitas modificar imports

Ejemplo de nuevo sitio:
```typescript
// src/data/sites/mi-nuevo-sitio.ts
import { Site } from '../../types/Site';

export const miNuevoSitio: Site = {
  id: '9',
  name: 'Mi Nuevo Sitio',
  url: 'https://ejemplo.com',
  image: 'https://images.pexels.com/...',
  description: 'Descripción detallada del sitio...',
  category: 'SaaS',
  tags: ['React', 'Modern', 'SaaS'],
  price: 97,
  subtitle: 'Subtítulo descriptivo',
  framework: 'React + Tailwind',
  version: '5.4.1',
  themeVersion: '1.0.0',
  updated: '1 month ago',
  released: '3 months ago',
  documentation: 'https://docs.ejemplo.com',
  changelog: [
    {
      version: 'v1.0.0',
      date: '01 Jan, 2025',
      changes: ['Initial release', 'Core features implemented']
    }
  ],
  keyFeatures: [
    'Característica principal 1',
    'Característica principal 2',
    'SEO optimizado',
    'Diseño responsive'
  ]
};
```

### Modificar planes de precios

Edita `src/data/plans.ts` para personalizar los planes disponibles:

```typescript
export const pricingPlans: Plan[] = [
  {
    id: 'individual',
    name: 'Plan Individual',
    price: 97,
    features: [
      { text: '1 Usuario', included: true },
      { text: '12 Meses de Acceso', included: true }
    ]
  }
];
```

### Personalizar estilos

Los estilos están construidos con Tailwind CSS:
- **Modificar componentes** - Edita las clases de Tailwind directamente
- **Estilos globales** - Agrega CSS personalizado en `src/index.css`
- **Configuración de Tailwind** - Personaliza `tailwind.config.js`

## 🚀 Despliegue en Producción

### Construcción para producción

```bash
# Crear build optimizada
npm run build

# Previsualizar build localmente
npm run preview
```

### Opciones de despliegue

1. **Netlify** (Recomendado)
   - Conecta tu repositorio de Git
   - Build automática en cada push
   - CDN global incluido
   - Configuración automática

2. **Vercel**
   - Integración perfecta con React
   - Despliegues automáticos
   - Optimizaciones de rendimiento

3. **GitHub Pages**
   - Gratuito para repositorios públicos
   - Configuración simple

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado
```bash
# El servidor intentará usar otro puerto automáticamente
# O especifica un puerto manualmente:
npm run dev -- --port 3000
```

### Problemas de TypeScript
```bash
# Verificar tipos
npx tsc --noEmit
```

### Sitios no se cargan
```bash
# Verificar que los archivos estén en src/data/sites/
# El sistema de importación automática los detectará
```

## 📱 Características Técnicas

- ✅ **Responsive Design** - Funciona perfectamente en todos los dispositivos
- ✅ **Búsqueda y Filtros** - Sistema avanzado de filtrado
- ✅ **Preview en Vivo** - Visualización real de sitios web
- ✅ **Vistas Responsivas** - Desktop, Tablet y Mobile
- ✅ **Navegación Fluida** - URLs amigables y historial del navegador
- ✅ **TypeScript** - Código completamente tipado
- ✅ **Importación Automática** - Sistema escalable sin configuración manual
- ✅ **SEO Friendly** - Meta tags y estructura optimizada
- ✅ **Performance** - Carga rápida y optimizada

## 🎨 Diseño y UX

- **Diseño moderno** - Interfaz limpia y profesional
- **Micro-interacciones** - Animaciones suaves y feedback visual
- **Accesibilidad** - Cumple con estándares de accesibilidad web
- **Consistencia visual** - Sistema de diseño coherente
- **Experiencia fluida** - Navegación intuitiva y rápida

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de contribución

- **Código limpio** - Sigue las convenciones de TypeScript y React
- **Componentes reutilizables** - Crea componentes modulares
- **Documentación** - Documenta nuevas funcionalidades
- **Testing** - Prueba tus cambios antes de enviar PR

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes problemas o preguntas:

1. **Revisa esta documentación** - La mayoría de dudas están cubiertas aquí
2. **Busca en los issues** - Puede que alguien ya haya tenido el mismo problema
3. **Crea un nuevo issue** - Proporciona detalles del problema y pasos para reproducirlo
4. **Incluye información del sistema** - Versión de Node.js, npm, y sistema operativo

## 🔄 Actualizaciones

Para mantener el proyecto actualizado:

```bash
# Verificar actualizaciones de dependencias
npm outdated

# Actualizar dependencias
npm update

# Actualizar dependencias principales
npm install react@latest react-dom@latest
```

---

¡Disfruta desarrollando con Website Showcase! 🚀

**Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS**
