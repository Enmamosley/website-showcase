export interface PlanFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  originalPrice?: number;
  price: number;
  discount?: string;
  period: string;
  access: string;
  projects: string;
  users: string;
  support: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonStyle: 'default' | 'popular';
}