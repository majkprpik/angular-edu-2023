import { CartItem } from './CartItem';

export interface Cart {
  cartItems: CartItem[];
  totalPrice: number;
}
