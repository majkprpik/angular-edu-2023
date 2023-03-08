import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) {
    productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.getProducts();
    activatedRoute.data.subscribe((data)=>{
      console.log(data);
    })
  }
}
