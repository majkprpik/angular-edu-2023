import { Cart } from './../../shared/Cart';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Product } from '../../shared/Product';
import { CartItem } from '../../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart: Cart;

  constructor(private cartService: CartService) {
    cartService.$cart.subscribe((cartData) => {
      this.cart = cartData;
    });
  }

  removeItem(cartProduct: CartItem) {
    this.cartService.removeCartItem(cartProduct);
  }

  onAddQuantity(product: Product) {
    this.cartService.addProductToCart(product);
  }

  removeQuantity(product: Product) {
    this.cartService.removeQuantity(product);
  }

  onClearCart() {
    this.cartService.ClearCart();
  }
}
