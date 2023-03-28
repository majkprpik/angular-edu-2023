import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [];

  viewClass = 'grid-container';

  ascendingToDesending: boolean = true;

  addToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.productService.getProducts();
    this.productService.$products.subscribe((p) => {
      this.products = p;
    });
  }
}
