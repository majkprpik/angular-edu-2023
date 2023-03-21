import { Cart } from './../shared/Cart';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { CartItem } from '../shared/CartItem';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  cart: Cart = {
    cartItems: [],
    priceTotal: 0,
  };

  savedItem: Product;

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor(private storageService: StorageService) {
    const cartData = this.storageService.getFromLocal('cart');
    if (cartData) {
      this.cart.cartItems = cartData;
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
      this.cart.priceTotal = this.cart.priceTotal + product.price;
      this.storageService.saveToLocal('cart', this.cart.cartItems);
    } else {
      tempProduct.quantity++;
      this.cart.priceTotal += tempProduct.product.price;
    }
    this.$cart.next(this.cart);
    console.log(this.cart);
  }

  removeCartItem(cartItem: CartItem) {
    let productIndx = this.cart.cartItems.findIndex(
      (p) => p.product.id === cartItem.product.id
    );
    this.cart.cartItems.splice(productIndx, cartItem.quantity);
    this.cart.priceTotal -= cartItem.product.price * cartItem.quantity;
    this.$cart.next(this.cart);
  }

  removeQuantity(product: Product) {
    let productIndx = this.cart.cartItems.findIndex(
      (p) => p.product.id == product.id
    );
    if (this.cart.cartItems[productIndx].quantity > 1) {
      this.cart.cartItems[productIndx].quantity--;
      this.cart.priceTotal -= product.price;
    } else {
      this.cart.cartItems.splice(productIndx, 1);
      this.cart.priceTotal -= product.price;
    }
    this.$cart.next(this.cart);
  }
}
