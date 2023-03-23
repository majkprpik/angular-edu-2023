import { Product } from './../../models/Product';
import { round } from 'lodash';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../models/Cart';
import { CartService } from '../../services/cart.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    private router: Router,
    private cartService: CartService,
    private storageService: StorageService
  ) {
    this.cartService.$cart.subscribe((data) => {
      this.cart = data;
    });
  }

  cart: Cart;

  toHome() {
    this.router.navigate(['stjepan', 'dashboard']);
  }

  subQuantity(product: Product) {
    let index = this.cart.cartProducts.findIndex(
      (p) => p.cartProduct.id == product.id
    );
    if (this.cart.cartProducts[index].quantity > 1) {
      this.cart.cartProducts[index].quantity--;
    }
  }

  addQuantity(product: Product) {
    let index = this.cart.cartProducts.findIndex(
      (p) => p.cartProduct.id == product.id
    );
    if (this.cart.cartProducts[index].quantity >= 1) {
      this.cart.cartProducts[index].quantity++;
    }
  }

  removeItem(item: Product) {
    this.cartService.removeFromCart(item);
  }

  totalPrice() {
    return round(this.cartService.getTotalPrice(), 2);
  }
}
