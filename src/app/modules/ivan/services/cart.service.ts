import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/Cart';
import { Product } from '../shared/Product';

@Injectable()
export class CartService {
  cart: Cart = {
    products: [],
    priceTotal: 0,
  };
  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  addProductToCart(product: Product) {
    this.cart.products.push(product);
    this.$cart.next(this.cart);
  }

  removeCartItem(productId: number) {
    this.cart.products = this.cart.products.filter((a) => {
      return a.id != productId;
    });
    this.$cart.next(this.cart);
  }
}
