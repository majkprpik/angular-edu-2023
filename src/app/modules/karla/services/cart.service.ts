import { CartItem } from './../models/cartItem';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = {
    productList: [],
    totalPrice: 0,
  };

  constructor() {}
  $cart = new BehaviorSubject<Cart>(this.cart);

  GetItem(product: Product) {
    return this.cart;
  }

  AddItem(product: Product) {
    let temp = this.cart.productList.find((ci) => ci.product.id == product.id);

    if (temp == undefined) {
      let cartItem = {
        product: product,
        quantity: 1,
      };
      this.cart.productList.push(cartItem);
      this.cart.totalPrice += Number(product.price);
    } else {
      temp.quantity++;
      this.cart.totalPrice += Number(product.price);
    }
    this.$cart.next(this.cart);
    console.log(this.cart);
  }

  RemoveItem(productId: number) {
    const productIndex = this.cart.productList.findIndex(
      (cartItem) => cartItem.product.id == productId
    );
    if (productIndex > -1) {
      this.cart.productList.splice(productIndex, 1);
    }
    this.$cart.next(this.cart);
  }
}
