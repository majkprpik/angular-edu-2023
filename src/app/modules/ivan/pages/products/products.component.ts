
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  sliderValue: Slider = {
    min: 0,
    max: 2000,
  };

  displayMode = 1;
  selectField = 'desc';
  products: Product[] = [];
  selectedProducts: Product

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService
  ) {
    this.productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.getProducts();
    this.productService.getProductsResolver();
    route.data.subscribe((data) => {
      console.log(data);
    });
  }




  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  onDescend() {
    this.selectField = 'desc';
  }

  onAscend() {
    this.selectField = 'asc';
  }

  changeMin(ev:number) {
    this.sliderValue = {
      min: ev,
      max: this.sliderValue.max,
    };
  }
  changeMax(ev:number) {
    this.sliderValue = {
      min: this.sliderValue.min,
      max: ev,
    };
  }
}


export interface Slider {
  min: number;
  max: number;
}
