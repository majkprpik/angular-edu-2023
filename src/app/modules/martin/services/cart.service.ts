import { CartItem } from './../models/cart-item';
import { Cart } from './../models/cart';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = {
    cartItems: [],
    totalPrice: 0,
  };
  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor() {}

  addToCart(product: Product) {
    // Check if the product is already in the cart
    const itemIndex = this.cart.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndex === -1) {
      // If the product is not in the cart, add it
      this.cart.cartItems.push({ product: product, quantity: 1 });
    } else {
      // If the product is already in the cart, increment its quantity
      this.cart.cartItems[itemIndex].quantity++;
    }

    this.cart.totalPrice += product.price;

    this.$cart.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    // console.log(this.cart);
  }

  readFromCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.$cart.next(this.cart);
      return JSON.parse(cartData) as Cart;
    } else {
      return {
        cartItems: [],
        totalPrice: 0,
      };
    }
  }

  removeFromCart(cartItem: CartItem) {
    const index = this.cart.cartItems.findIndex((ci: CartItem) => {
      return ci.product.id == cartItem.product.id;
    });
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.cart.cartItems[index] = cartItem;
    } else {
      this.cart.cartItems.splice(index, 1);
    }

    this.cart.totalPrice -= cartItem.product.price;
    this.$cart.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
