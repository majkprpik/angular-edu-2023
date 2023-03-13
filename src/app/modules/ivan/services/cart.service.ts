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

  setCart(product: any) {
    this.cart.products.push(...product);
  }

  addProductToCart(product: Product) {
    this.cart.products.push(product);
    this.$cart.next(this.cart);
    console.log(this.cart);
  }

  removeCartItem(productId: number) {
    this.cart.products = this.cart.products.filter((a) => {
      return a.id != productId;
    });
    this.$cart.next(this.cart);
  }

  getTotalPrice(): number {
    let priceTotal = 0;
    this.cart.products.forEach((a: any) => {
      priceTotal += a.price;
    });
    return priceTotal;
  }
}
