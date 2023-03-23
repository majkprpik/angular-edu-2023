import { CartItem } from './../../models/cart-item';
import { Cart } from './../../models/cart';
import { CartServiceService } from './../../services/cart-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products: CartItem[] = [];
  localCart: Cart;
  totalPrice: number;

  constructor(private cartService: CartServiceService) {
    this.cartService.$cart.subscribe((product) => {
      this.localCart = product;
    });
    this.products = this.localCart.cartItems;
    this.totalPrice = this.cartService.cart.price;
  }

  removeFromCart(phone: any) {
    this.cartService.remove(phone);
    phone.quantity++;
    this.products = this.localCart.cartItems;
  }
}
