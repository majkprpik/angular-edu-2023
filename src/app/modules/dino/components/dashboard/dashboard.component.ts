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
  
  sortAscending=false;

  sliderValue=0;  
  sliderMax=26000;
  sliderMin=0;
  sliderStep=10;
  sliderValueMin=0;
  sliderValueMax=20000;

  ChangeOrder(){
    this.productService.ChangeSortOrder();
  }

  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) {
    productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.$sortAscending.subscribe((order)=>{
      this.sortAscending=order;
    })
    productService.$maximumPrice.subscribe((max)=>{
      this.sliderMax=max;
    })
    productService.$minimumPrice.subscribe((min)=>{
      this.sliderMin=min;
    })
    productService.getProducts();
    activatedRoute.data.subscribe((data)=>{
      console.log(data);
    })
  }
}
