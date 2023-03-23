import { CartItem } from './../shared/CartItem';
import { Cart } from './../shared/Cart';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  cart: Cart = {
    cartItems: [],
    totalPrice: 0,
  };

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor(private storageService: StorageService) {
    const cartData = this.storageService.getFromLocal('cart');
    if (cartData) {
      this.cart.cartItems = cartData;
      this.$cart.next(this.cart);
    }
    const valueInfo = this.storageService.getFromLocal('price');
    if (valueInfo) {
      this.cart.totalPrice = valueInfo;
      this.$cart.next(this.cart);
    }
  }

  addProductToCart(product: Product) {
    let tempProduct = this.cart.cartItems.find(
      (p) => p.product.id === product.id
    );
    let cartItem = {
      product: product,
      quantity: 1,
    };
    if (tempProduct == undefined) {
      this.cart.cartItems.push(cartItem);
      this.cart.totalPrice = this.TotalPrice;
    } else {
      tempProduct.quantity++;
      this.cart.totalPrice = this.TotalPrice;
    }
    this.$cart.next(this.cart);
    this.storageService.saveToLocal('cart', this.cart.cartItems);
    console.log(this.cart);
  }

  removeCartItem(cartItem: CartItem) {
    let productIndx = this.cart.cartItems.findIndex(
      (p) => p.product.id === cartItem.product.id
    );
    this.cart.cartItems.splice(productIndx, 1);
    this.cart.totalPrice = this.TotalPrice;
    this.storageService.saveToLocal('cart', this.cart.cartItems);
    this.$cart.next(this.cart);
  }

  removeQuantity(product: Product) {
    let productIndx = this.cart.cartItems.findIndex(
      (p) => p.product.id == product.id
    );
    if (this.cart.cartItems[productIndx].quantity > 1) {
      this.cart.cartItems[productIndx].quantity--;
      this.cart.totalPrice = this.TotalPrice;
    } else {
      this.cart.cartItems.splice(productIndx, 1);
      this.cart.totalPrice = this.TotalPrice;
    }
    this.$cart.next(this.cart);
    this.storageService.saveToLocal('cart', this.cart.cartItems);
  }

  get TotalPrice(): number {
    let totalPrice = 0;
    this.cart.cartItems.forEach((product) => {
      totalPrice += product.product.price * product.quantity;
    });
    this.storageService.saveToLocal('price', totalPrice);
    this.$cart.next(this.cart);
    return totalPrice;
  }

  ClearCart() {
    this.cart.cartItems = [];
    this.cart.totalPrice = 0;
    localStorage.removeItem('price');
    localStorage.removeItem('cart');
  }
}
