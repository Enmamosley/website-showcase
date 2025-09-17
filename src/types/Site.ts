export interface Site {
  id: string;
  nombre: string;
  url: string;
  imagen: string;
  descripcion: string;
  categoria: string;
  etiquetas: string[];
  destacado?: boolean;
  pageSpeed: string;
  lanzado: string;
  caracteristicasClave: string[];
  testimonio?: Testimonial;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  link?: string;
}

export interface NavigationState {
  view: 'catalog' | 'detail' | 'contact' | 'support' | 'terms' | 'privacy';
  selectedSite?: Site;
}