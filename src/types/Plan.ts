export interface PlanFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  originalPrice?: string;
  price: string;
  discount?: string;
  period: string;
  access: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
  buttonStyle: 'default' | 'popular';
}