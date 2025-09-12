export interface Site {
  id: string;
  nombre: string;
  url: string;
  imagen: string;
  descripcion: string;
  categoria: string;
  etiquetas: string[];
  destacado?: boolean;
  precio: number;
  subtitulo: string;
  framework: string;
  pageSpeed: string;
  lanzado: string;
  caracteristicasClave: string[];
  testimonio?: Testimonial;
  promocionBundle?: BundlePromo;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  link?: string;
}

export interface BundlePromo {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  link: string;
}

export interface NavigationState {
  view: 'catalog' | 'detail';
  selectedSite?: Site;
}