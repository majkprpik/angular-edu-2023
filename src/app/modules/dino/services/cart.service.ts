import { StorageService } from './storage.service';
import { Product } from './../models/Product';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './../models/Cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart: Cart = {
    cartItems: [],
    totalPrice: 0,
  };

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);
  constructor(private storageService:StorageService) {
    this.cart=storageService.LoadCart("cart");
    this.$cart.next(this.cart);
  }

  AddProduct(product: Product) {
    let cartItem = {
      product: product,
      quantity: 1,
    };
    let itemIndex = this.cart.cartItems.findIndex(
      (c) => c.product.id == product.id
    );
    let tempItem=this.cart.cartItems.find((p)=>p.product.id==product.id)
    
    if(tempItem==undefined){
      this.cart.cartItems.push(cartItem);
      this.cart.totalPrice=this.cart.totalPrice+product.price;
    }else{
      tempItem.quantity++;
      this.cart.totalPrice+=tempItem.product.price;
    }
    this.$cart.next(this.cart);
  }

  RemoveProduct(product:Product){
    let itemIndex = this.cart.cartItems.findIndex(
      (c) => c.product.id == product.id
    );
    if(this.cart.cartItems[itemIndex].quantity>1){
      this.cart.cartItems[itemIndex].quantity--;
      this.cart.totalPrice-=product.price;
    }else{
      this.cart.cartItems.splice(itemIndex,1);
      this.cart.totalPrice-=product.price;
    }
  }

}
