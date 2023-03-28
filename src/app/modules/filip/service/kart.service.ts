import { cartItem } from './../models/cart-item';
import { Product } from './../models/product';
import { BehaviorSubject } from 'rxjs';
import { cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable()
export class KartService {
  cart: cart = {
    productList: [],
    totalPrice: 0,
  };
  constructor() {}
  $cart = new BehaviorSubject<cart>(this.cart);

  addItem(product: Product) {
    let temp = this.cart.productList.find((ci) => ci.product.id == product.id);

    if (temp == undefined) {
      let cartItem = {
        product: product,
        quantity: 1,
      };
      this.cart.productList.push(cartItem);
      this.cart.totalPrice += product.price;
    } else {
      temp.quantity++;
      this.cart.totalPrice += product.price;
    }

    this.$cart.next(this.cart);
    console.log(this.cart);
  }

  removeItem(product: Product) {
    const productIndex = this.cart.productList.findIndex(
      (cartItem) => cartItem.product.id == product.id
    );
    if (productIndex > -1) {
      this.cart.productList.splice(productIndex, 1);
      
    }
    this.$cart.next(this.cart);
    this.cart.totalPrice -= product.price;
  }

  
}
