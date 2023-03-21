import { Cart } from './../../shared/Cart';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
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
      this.totalPrice = this.cartService.cart.priceTotal;
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
}
