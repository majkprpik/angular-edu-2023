import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cartItems: Product[] = [];
  totalPrice: number;

  constructor(private cartService: CartService) {
    cartService.$cart.subscribe((cart) => {
      this.cartItems = cart.products;
      this.totalPrice = this.cartService.getTotalPrice()
    });
  }

  removeItem(product: Product) {
    this.cartService.removeCartItem(product.id);
  }
}
