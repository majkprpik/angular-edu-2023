import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent {

  constructor(private productService:ProductService){
    
  }

  filterProductsByPrice(price: number) {
    return this.productService.$sliderValueMin.next(price);
  }

  
}
