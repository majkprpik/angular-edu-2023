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

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor(private storageService: StorageService) {}

  addProductToCart(product: Product) {
    let tempArray = this.cart.cartItems.find(
      (p) => p.product.id === product.id
    );
    let cartItem = {
      product: product,
      quantity: 1,
    };
    if (tempArray) {
      tempArray.quantity += 1;
    } else {
      this.cart.cartItems.push();
    }
    this.cart.cartItems.push(cartItem);
    this.$cart.next(this.cart);
    this.storageService.saveToLocal('product', this.cart);
    console.log(this.cart);
  }

  removeCartItem(productId: number) {
    this.cart.cartItems = this.cart.cartItems.filter((a) => {
      return a.product.id != productId;
    });
    this.$cart.next(this.cart);
  }

  getTotalPrice(): number {
    let priceTotal = 0;
    this.cart.cartItems.forEach((a: any) => {
      priceTotal += a.product.price;
    });
    return priceTotal;
  }
  getStorage(): string {
    return this.storageService.getFromLocal('product');
  }
}
