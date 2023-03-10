import { Product } from './Product';
export interface Cart {
  products: Product[];
  priceTotal: number;
}
