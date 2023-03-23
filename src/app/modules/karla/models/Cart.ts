import { CartItem } from './cartItem';

export interface Cart {
  productList: CartItem[];
  totalPrice: number;
}
