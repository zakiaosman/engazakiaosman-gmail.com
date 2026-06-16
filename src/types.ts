export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ActiveView = 'home' | 'shop' | 'heritage';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}
