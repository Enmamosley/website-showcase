# Website Showcase - Guía de Despliegue Local

Una aplicación moderna de catálogo de sitios web construida con React, TypeScript y Tailwind CSS.

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
git clone <URL_DEL_REPOSITORIO>

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
│   ├── Catalog.tsx     # Componente principal del catálogo
│   ├── SiteCard.tsx    # Tarjeta individual de sitio
│   └── SiteDetail.tsx  # Vista detallada del sitio
├── data/               # Datos de los sitios web
│   └── sites/          # Archivos individuales de cada sitio
├── types/              # Definiciones de TypeScript
│   └── Site.ts         # Interfaces y tipos
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Lucide React** - Iconos modernos

## 🔧 Personalización

### Agregar nuevos sitios

1. Crea un nuevo archivo en `src/data/sites/`
2. Sigue la estructura de `Site` definida en `src/types/Site.ts`
3. Exporta el sitio en `src/data/sites/index.ts`

Ejemplo:
```typescript
import { Site } from '../../types/Site';

export const miNuevoSitio: Site = {
  id: '9',
  name: 'Mi Nuevo Sitio',
  url: 'https://ejemplo.com',
  image: 'https://images.pexels.com/...',
  description: 'Descripción del sitio...',
  category: 'SaaS',
  tags: ['React', 'Modern'],
  price: 97,
  // ... más propiedades
};
```

### Modificar estilos

Los estilos están construidos con Tailwind CSS. Puedes:
- Modificar clases existentes en los componentes
- Agregar nuevos estilos en `src/index.css`
- Personalizar la configuración de Tailwind en `tailwind.config.js`

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

## 📱 Características

- ✅ **Responsive Design** - Funciona en todos los dispositivos
- ✅ **Búsqueda y Filtros** - Encuentra sitios fácilmente
- ✅ **Vista de Detalles** - Información completa de cada sitio
- ✅ **Preview en Vivo** - Visualización en diferentes dispositivos
- ✅ **Navegación Fluida** - Experiencia de usuario optimizada
- ✅ **TypeScript** - Código tipado y mantenible

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa esta documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

¡Disfruta desarrollando con Website Showcase! 🚀