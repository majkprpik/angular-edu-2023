import { CartItem } from './../models/cart-item';
import { Product } from './../models/product';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartServiceService {
  cart: any = {
    cartItems: [],
    price: 0,
  };

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor() {}

  add(product: Product) {
    let cartItemTemp = {
      product: product,
      quantity: 1,
    };

    for (let i = 0; i < this.cart.cartItems.length; i++) {
      if (product.id == this.cart.cartItems[i].product.id) {
        this.cart.cartItems[i].quantity++;
        this.cart.price += product.price;
        this.$cart.next(this.cart);
        return;
      }
    }

    this.cart.cartItems.push(cartItemTemp);
    this.cart.price += product.price;
    this.$cart.next(this.cart);
  }

  remove(product: Product) {
    for (let i = 0; i < this.cart.cartItems.length; i++) {
      if (product.id == this.cart.cartItems[i].product.id) {
        this.cart.cartItems[i].quantity--;
        if (this.cart.cartItems[i].quantity == 0) {
          break;
        }
        this.cart.price -= product.price;
        this.$cart.next(this.cart);
        return;
      }
    }

    this.cart.price -= product.price;
    this.cart.cartItems = this.cart.cartItems.filter(
      (p: any) => p.product.id != product.id
    );
    console.log('Cart after remove: ');
    console.log(this.cart);
    this.$cart.next(this.cart);
  }
}
