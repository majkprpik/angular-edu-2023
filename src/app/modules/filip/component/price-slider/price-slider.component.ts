import { Product } from './../../models/product';
import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss'],
})
export class PriceSliderComponent {
  constructor(private productService: ProductService) {}

  filterProductsByPrice(price: number) {
    //  this.productService = this.productService.products.filter(Product=>Product.price>=price);
  }

  // {{ value_expression | slice : start [ : end ] }} zamisao je sa slice pipom implementirati product slider
}
