import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductServiceService } from '../../services/products/product-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {
    this.productService.$ferrarimodels.subscribe((ferrarimodels) => {
      this.products = ferrarimodels;
    });
  }
}
