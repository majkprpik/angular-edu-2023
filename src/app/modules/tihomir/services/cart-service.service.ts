import { Product } from './../models/product';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartServiceService {

  cart : Cart = {
    products : [],
    price : 0
  };

  $cart : BehaviorSubject<Cart> = new BehaviorSubject<Cart>(
    this.cart
  );
  
  constructor() {

  }

  add(product : Product){
    this.cart.products.push(product);
    this.cart.price+=product.price;
    this.$cart.next(this.cart);
  }

  remove(product : Product){
    this.cart.price-=product.price;
    this.cart.products = this.cart.products.filter(p => p.id !== product.id);
    console.log("Cart after remove: ");
    console.log(this.cart);
    this.$cart.next(this.cart);
  }
}
