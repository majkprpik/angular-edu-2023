import { ActivatedRoute } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [];

  sortUD: string;

  priceMin: number;
  priceMax: number;

  sliderValueMin = 0;
  sliderValueMax = 2000;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response);
    });

    this.productService.$products.subscribe((products) => {
      this.products = products;
    });

    productService.$sortUD.subscribe((value) => {
      this.sortUD = value;
    });

    productService.$priceMin.subscribe((value) => {
      this.priceMin = value;
    });
    productService.$priceMax.subscribe((value) => {
      this.priceMax = value;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  sliderValueChange() {
    this.productService.$priceMin.next(this.sliderValueMin);
    this.productService.$priceMax.next(this.sliderValueMax);
  }
}
