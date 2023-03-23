import { Product } from './../models/Product';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  cart: Cart = {
    cartProducts: [],
  }

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor(private storageService: StorageService) {
    const cartData = this.storageService.get('cart')
    if(cartData) {
      this.cart.cartProducts = cartData;
      this.$cart.next(this.cart);
    }
  }

  addProductToCart(product: Product, quantity: number = 1) {
    let existingP = this.cart.cartProducts.find(p =>  p.cartProduct.id == product.id);
    if(product.quantity > 0) {
      if(existingP) {
        existingP.quantity += 1;
      }
      else {
        let tmpItem = {
          cartProduct: product,
          quantity: quantity,
        }
        this.cart.cartProducts.push(tmpItem);
      }
      this.$cart.next(this.cart);
    }
    else {
      console.log('Nema proizvoda!');
    }

    this.saveToStorage();
  }

  removeFromCart(product: Product) {
    const index = this.cart.cartProducts.findIndex(p => p.cartProduct.id === product.id);
    if (index !== -1) {
      this.$cart.value.cartProducts.splice(index, 1); // removaj iz $cart
      localStorage.setItem('cart', JSON.stringify(this.$cart.value.cartProducts)); // postavi u $cart
      this.$cart.next(this.cart);
      }
    }

  getTotalPrice() {
    return this.cart.cartProducts.reduce((total,product) => total + product.cartProduct.price*product.quantity, 0);
  }

  saveToStorage() {
    this.storageService.set("cart", this.cart.cartProducts);
  }
}
