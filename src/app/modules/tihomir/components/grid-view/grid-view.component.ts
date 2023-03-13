import { SidebarComponent } from './../sidebar/sidebar.component';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { ProductServiceService, SliderValues } from './../../services/product-service.service';
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

  sliderValue : SliderValues;
  productData : any = [];

  constructor(private productService : ProductServiceService){

    this.productService.$sliderValue.subscribe((value) =>{
      this.sliderValue = value;
    });

    this.productData =  this.productService.getProductData();

    this.productService.$phones.subscribe((phones) => {
      this.products = phones;
    });

  }
}
