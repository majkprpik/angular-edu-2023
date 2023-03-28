import { Product } from './../../shared/Product';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Slider } from '../products/products.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() slider: Slider;
  @Input() product: Product;
  constructor(private cartService: CartService) {}

  addToCart(products) {
    this.cartService.addProductToCart(products);
  }
}
