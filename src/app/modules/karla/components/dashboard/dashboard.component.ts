import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products: Product[] = [];
  $products = new BehaviorSubject<Product[]>(this.products);

  constructor(private productService: ProductService) {
    this.productService.$product.subscribe(
      (product) => (this.products = product)
    );
  }


}
