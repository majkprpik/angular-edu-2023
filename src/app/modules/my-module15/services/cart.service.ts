import { StorageService } from './storage.service';
import { ProductService } from './product.service';
import { Product } from './../models/Products';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../models/Cart';


@Injectable()
export class CartService {
  constructor(activatedRoute: ActivatedRoute,
     products: ProductService, private storageService: StorageService) { 
    const cartData = this.storageService.get('cart');
    if (cartData) {
      this.cart.cartProducts = cartData;
      this.$cart.next(this.cart);
    }
    
  }
  cart: cart = {
    cartProducts: [],
  }
  $cart: BehaviorSubject<cart> = new BehaviorSubject<cart>(this.cart);


  addToCart(product: Product, quantity: number = 1){
    let existingProduct = this.cart.cartProducts.find(p => p.cartProduct.id === product.id);
    console.log(existingProduct);
    if(product.quantity > 0){
        if(existingProduct){
          existingProduct.quantity += quantity;
        } else {
          let cartItemTmp = {
            cartProduct: product,
            quantity: quantity,
          }
    
          this.cart.cartProducts.push(cartItemTmp);
  
        }
        this.$cart.next(this.cart);
    }
    else{
      console.log("The product is out of stock");
    }  
    this.cartToStorage();
  }

 cartToStorage(){
  this.storageService.set('cart', this.cart.cartProducts);
}

 removeFromCart(product: Product) {
  const index = this.cart.cartProducts.findIndex(p => p.cartProduct.id === product.id);
  if (index !== -1) {
    this.cart.cartProducts.splice(index, 1);
    this.$cart.next(this.cart);
    this.cartToStorage();
    }
  }

  getTotal(){
    return this.cart.cartProducts.reduce((total, product) => total + product.cartProduct.price*product.quantity, 0);
  }
  
  getCartLength(){
    return this.cart.cartProducts.reduce((total, product) => total + product.quantity, 0);
  }
}
