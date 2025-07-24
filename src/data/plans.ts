import { Plan } from '../types/Plan';

export const pricingPlans: Plan[] = [
  {
    id: 'individual',
    name: 'Individual Theme',
    description: 'Perfect for single project',
    price: 97,
    period: '+ Local Taxes',
    access: '12 months access, 1 Project license',
    projects: 'Single Project',
    users: '1 User',
    support: '3 Months Premium Support',
    features: [
      { text: '1 User', included: true },
      { text: '12 Months Access', included: true },
      { text: '3 Months Premium Support', included: true },
      { text: 'Personal & Commercial License', included: true },
      { text: 'Free Updates for 12 Months', included: true },
      { text: 'Upto 5 Projects', included: false }
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'default'
  },
  {
    id: 'starter',
    name: 'Astro Bundle Starter',
    description: 'For individuals developing their next project',
    originalPrice: 192,
    price: 137,
    discount: '30% OFF',
    period: '+ Local Taxes',
    access: '12 months access, 1 Project / theme',
    projects: '1 Project / Each Theme',
    users: 'Up to 1 User',
    support: '3 Months Premium Support',
    features: [
      { text: 'Fortify Astro + 32 Premium Themes', included: true, highlighted: true },
      { text: 'Get Upcoming Themes for 12 Months', included: true },
      { text: 'Up to 1 User', included: true },
      { text: '1 Project / Each Theme', included: true },
      { text: '3 Months Premium Support', included: true },
      { text: '12 Months Access & Free Updates', included: true },
      { text: 'Commercial Project License', included: true }
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'default'
  },
  {
    id: 'plus',
    name: 'Astro Bundle Plus',
    description: 'For developers & startups managing multiple projects',
    originalPrice: 297,
    price: 197,
    discount: '33% OFF',
    period: '+ Local Taxes',
    access: 'Lifetime Access, 10 Projects / theme',
    projects: '10 Projects / Each Theme',
    users: 'Up to 5 Users',
    support: '6 Months Premium Support',
    isPopular: true,
    features: [
      { text: 'Fortify Astro + 32 Premium Themes', included: true, highlighted: true },
      { text: 'Get Upcoming Themes for Lifetime', included: true },
      { text: 'Up to 5 Users', included: true },
      { text: '10 Projects / Each Theme', included: true },
      { text: '6 Months Premium Support', included: true },
      { text: 'Lifetime Access & Free Updates', included: true },
      { text: 'Commercial Project License', included: true }
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'popular'
  },
  {
    id: 'elite',
    name: 'Astro Bundle Elite',
    description: 'For large teams & agencies handling many projects',
    originalPrice: 497,
    price: 297,
    discount: '40% OFF',
    period: '+ Local Taxes',
    access: 'Lifetime Access, Unlimited Projects',
    projects: 'Unlimited Projects / Each Theme',
    users: 'Up to 20 Users',
    support: '6 Months Premium Support',
    features: [
      { text: 'Fortify Astro + 32 Premium Themes', included: true, highlighted: true },
      { text: 'Get Upcoming Themes for Lifetime', included: true },
      { text: 'Up to 20 Users', included: true },
      { text: 'Unlimited Projects / Each Theme', included: true },
      { text: '6 Months Premium Support', included: true },
      { text: 'Lifetime Access & Free Updates', included: true },
      { text: 'Commercial Project License', included: true }
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'default'
  }
];