import { Plan } from '../types/Plan';

export const pricingPlans: Plan[] = [
  {
    id: 'individual',
    name: 'Basico',
    description: 'Perfect for single project',
    price: "1,299",
    period: '- Sin cargos adicionales',
    access: 'Unico pago, acceso de por vida',
    projects: '',
    users: '1 User',
    support: '3 Months Premium Support',
    features: [
 { text: 'Hosting gratis de por vida', included: true },
      { text: 'Subdominio .msl.mx', included: true },
      { text: 'Mantenimiento gratuito', included: true },
      { text: 'Blog', included: false }, 
      { text: 'Listo en 72 horas', included: true },
      { text: 'Funciones de Ecommerce', included: false },
      { text: 'Correo Electronico', included: false },    
      { text: 'Panel de Control', included: false },
      { text: 'Dominio Gratuito', included: false }

    ],
    buttonText: 'Comprar Ahora',
    buttonStyle: 'default'
  },
  {
    id: 'starter',
    name: 'Pro',
    description: 'Unico pago, acceso de por vida',
    price: "1,999",
    period: '- Sin cargos adicionales',
    access: 'Unico pago, acceso de por vida',
    projects: '',
    users: '1 User',
    support: '3 Months Premium Support',
    features: [
      { text: 'Hosting gratis de por vida', included: true },
      { text: 'Subdominio .msl.mx', included: true },
      { text: 'Mantenimiento gratuito', included: true },
      { text: 'Blog', included: true }, 
      { text: 'Listo en 48 horas', included: true },
      { text: 'Funciones de Ecommerce', included: false },
      { text: 'Correo Electronico', included: false },    
      { text: 'Panel de Control', included: false },
      { text: 'Dominio Gratuito', included: false }


    ],
    buttonText: 'Comprar Ahora',
    buttonStyle: 'default'
  },
  {
    id: 'plus',
    name: 'Pro Plus',
    description: '',
    originalPrice: "4,199",
    price: "2,999",
    discount: '33% OFF',
    period: 'Sin cargos adicionales',
    access: 'Unico Pago, Acceso de por Vida',
    projects: '',
    users: 'Up to 5 Users',
    support: '6 Months Premium Support',
    isPopular: true,
    features: [
      { text: 'Hosting gratis de por vida', included: true },
      { text: 'Subdominio .msl.mx', included: true },
      { text: 'Mantenimiento gratuito', included: true },
      { text: 'Blog', included: true }, 
      { text: 'Listo en 24 horas', included: true },
      { text: 'Funciones de Ecommerce', included: false },
      { text: 'Correo Electronico', included: true },    
      { text: 'Panel de Control', included: true },
      { text: 'Dominio Gratuito', included: true }

    ],
    buttonText: 'Comprar Ahora',
    buttonStyle: 'popular'
  },
  {
    id: 'elite',
    name: 'Pro Ecommerce',
    description: '',
    originalPrice: "9,799",
    price: "6,999",
    discount: '40% OFF',
    period: '+ Tarifa de procesamiento anual',
    access: 'Tarifa anual $350',
    projects: '',
    users: 'Up to 20 Users',
    support: '6 Months Premium Support',
    features: [
 { text: 'Hosting gratis de por vida', included: true },
      { text: 'Subdominio .msl.mx', included: true },
      { text: 'Mantenimiento gratuito', included: true },
      { text: 'Blog', included: true }, 
      { text: 'Listo en 24 horas', included: true },
      { text: 'Funciones de Ecommerce', included: true },
      { text: 'Correo Electronico', included: true },    
      { text: 'Panel de Control', included: true },
      { text: 'Dominio Gratuito', included: true}

    ],
    buttonText: 'Comprar Ahora',
    buttonStyle: 'default'
  }
];