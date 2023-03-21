import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';
import { CartServiceService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
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
