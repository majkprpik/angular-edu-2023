import { CartItem } from './cart-item';
import { Product } from './product';

export interface Cart {
    cartItems : CartItem[],
    price : number
}
