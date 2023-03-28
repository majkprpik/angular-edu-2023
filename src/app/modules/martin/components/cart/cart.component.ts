import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart = {
    cartItems: [],
    totalPrice: 0,
  };

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.$cart.subscribe((cart) => {
      this.cart = cart;
    });

    this.cart = this.cartService.readFromCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem);
  }

  goToList() {
    this.router.navigate(['martin', 'dashboard', 'list']);
  }

  goToGrid() {
    this.router.navigate(['martin', 'dashboard', 'grid']);
  }
}
