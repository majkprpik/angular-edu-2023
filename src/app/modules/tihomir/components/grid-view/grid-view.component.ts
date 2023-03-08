import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { ProductServiceService } from './../../services/product-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent {

  Logo = "assets/tihomir/Logo.png";
  products : Product[] = [];
  $products : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  productData : any = [];

  constructor(private productService : ProductServiceService, private router : Router){

    this.productData =  this.productService.getProductData();

    this.productService.$phones.subscribe((phones) => {
      this.products = phones;
    });
  }
  
}
