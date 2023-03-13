import { ProductService } from './../../services/product.service';
import { Product } from './../../shared/Product';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../shared/Cart';
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

  products: Product[] = [];
  cart: Cart = {
    cartItems: [],
    priceTotal: 0,
  };

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.$products.subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(products) {
    this.cartService.addProductToCart(products);
  }
}
