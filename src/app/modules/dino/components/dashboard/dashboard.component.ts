import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.getProducts();
  }
}
