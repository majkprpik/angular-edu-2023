import { Cart } from './../../models/cart';
import { Product } from './../../models/product';
import { CartServiceService } from './../../services/cart-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products: Product[] = [];
  localCart: Cart;
  totalPrice: number;

  constructor(private cartService: CartServiceService) {
    this.cartService.$cart.subscribe((product) => {
      this.localCart = product;
    });

    this.products = this.localCart.products;
    this.totalPrice = this.cartService.cart.price;
  }

  removeFromCart(phone: any) {
    this.cartService.remove(phone);
    this.products = this.localCart.products;
  }
}
