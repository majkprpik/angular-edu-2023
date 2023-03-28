import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts: any;

  constructor(private cartService: CartService) {
    this.cartService.GetItem;
  }
}
