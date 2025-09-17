import { Plan } from '../types/Plan';

export const pricingPlans: Plan[] = [
  {
    id: 'basico',
    name: 'Basico',
    description: 'Ideal para proyectos personales y pequeños negocios',
    price: "1,999",
    period: '- Sin cargos adicionales',
    access: 'Unico pago, acceso de por vida',
    features: [
      { text: '🚀 Hosting gratis de por vida', included: true },
      { text: '🌐 Subdominio .msl.mx incluido', included: true },
      { text: '🔧 Mantenimiento', included: true },
      { text: '📝 Sistema de Blog', included: false }, 
      { text: '⚡ Listo en 72 horas máximo', included: true },
      { text: '🛒 Tienda Online', included: false },
      { text: '📧 Correo Electrónico profesional', included: false },    
      { text: '⚙️ Panel de Control avanzado', included: false },
      { text: '🎯 Dominio personalizado gratis', included: false }
    ],
    buttonText: 'Comprar Ahora',
    buttonLink: 'https://wa.me/528125060903?text=Hola,%20me%20interesa%20el%20plan%20Básico%20de%20$1,999',
    buttonStyle: 'default'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para negocios en crecimiento que necesitan más funciones',
    price: "2,999",
    period: '- Sin cargos adicionales',
    access: 'Unico pago, acceso de por vida',
    features: [
      { text: '🚀 Hosting gratis de por vida', included: true },
      { text: '🌐 Subdominio .msl.mx incluido', included: true },
      { text: '🔧 Mantenimiento', included: true },
      { text: '📝 Sistema de Blog', included: false }, 
      { text: '⚡ Listo en 48 horas máximo', included: true },
      { text: '🛒 Tienda Online', included: false },
      { text: '📧 Correo Electrónico profesional', included: false },    
      { text: '⚙️ Panel de Control avanzado', included: false },
      { text: '🎯 Dominio personalizado gratis', included: false }
    ],
    buttonText: 'Comprar Ahora',
    buttonLink: 'https://wa.me/528125060903?text=Hola,%20me%20interesa%20el%20plan%20Pro%20de%20$2,999',
    buttonStyle: 'default'
  },
  {
    id: 'pro-plus',
    name: 'Pro Plus',
    description: 'La opción más popular - Perfecto para empresas establecidas',
    originalPrice: "7,999",
    price: "4,999",
    discount: '33% OFF',
    period: '+ Tarifa de procesamiento anual',
    access: 'Tarifa anual $2,000',
    isPopular: true,
    features: [
      { text: '🚀 Hosting gratis de por vida', included: true },
      { text: '🌐 Subdominio .msl.mx incluido', included: true },
      { text: '🔧 Mantenimiento', included: true },
      { text: '📝 Sistema de Blog ', included: true }, 
      { text: '⚡ Listo en 24 horas máximo', included: true, highlighted: true },
      { text: '🛒 Tienda Online', included: false },
      { text: '📧 Correo Electrónico profesional (3 cuentas)', included: true },    
      { text: '⚙️ Panel de Control avanzado', included: true },
      { text: '🎯 Dominio personalizado gratis', included: true }
    ],
    buttonText: 'Comprar Ahora',
    buttonLink: 'https://wa.me/528125060903?text=Hola,%20me%20interesa%20el%20plan%20Pro%20Plus%20de%20$4,999%20(33%%20OFF)',
    buttonStyle: 'popular'
  },
  {
    id: 'pro-ecommerce',
    name: 'Pro Ecommerce',
    description: 'Solución completa para tiendas online y ventas digitales',
    originalPrice: "9,799",
    price: "6,999",
    discount: '40% OFF',
    period: '+ Tarifa de procesamiento anual',
    access: 'Tarifa anual $2,000',
    features: [
      { text: '🚀 Hosting gratis de por vida', included: true },
      { text: '🌐 Subdominio .msl.mx incluido', included: true },
      { text: '🔧 Mantenimiento', included: true },
      { text: '📝 Sistema de Blog', included: true }, 
      { text: '⚡ Listo en 24 horas máximo', included: true, highlighted: true },
      { text: '🛒 Tienda Online', included: true, highlighted: true },
      { text: '📧 Correo Electrónico profesional (10 cuentas)', included: true },    
      { text: '⚙️ Panel de Control avanzado', included: true },
      { text: '🎯 Dominio personalizado gratis', included: true }
    ],
    buttonText: 'Comprar Ahora',
    buttonLink: 'https://wa.me/528125060903?text=Hola,%20me%20interesa%20el%20plan%20Pro%20Ecommerce%20de%20$6,999%20(40%%20OFF)',
    buttonStyle: 'default'
  }
];