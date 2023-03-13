import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/Product';
import { CartItem } from '../../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cartProducts: CartItem[] = [];
  totalPrice: number;

  constructor(private cartService: CartService) {
    cartService.$cart.subscribe((cart) => {
      this.cartProducts = this.cartService.cart.cartItems;
      this.totalPrice = this.cartService.getTotalPrice();
    });
    this.cartService.getStorage();
  }

  removeItem(product: Product) {
    this.cartService.removeCartItem(product.id);
  }
}
