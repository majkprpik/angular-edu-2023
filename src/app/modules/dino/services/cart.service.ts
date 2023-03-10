import { Product } from './../models/Product';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './../models/Cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart: Cart = {
    products: [],
    totalPrice: 0,
  };

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);
  constructor() {}

  AddItem(product: Product) {
    this.cart.products.push(product);
    this.$cart.next(this.cart);
  }
  RemoveItem(productId: number) {
    const productIndex = this.cart.products.findIndex(
      (product) => product.id == productId
    );
    if (productIndex > -1) {
      this.cart.products.splice(productIndex, 1);
    }
    this.$cart.next(this.cart);
  }
}
