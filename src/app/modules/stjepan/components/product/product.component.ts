import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() viewClass: string;

  products: Product[] = [];

  sliderValues: {
    min: number;
    max: number;
  } = {
    min: 0,
    max: 1000,
  };

  changeMin(value: any) {
    this.sliderValues = {
      min: value,
      max: this.sliderValues.max,
    };
  }

  changeMax(value: any) {
    this.sliderValues = {
      min: this.sliderValues.min,
      max: value,
    };
  }

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
