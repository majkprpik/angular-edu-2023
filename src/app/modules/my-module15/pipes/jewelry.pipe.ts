import { Product } from './../models/Products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jewelry',
})
export class JewelryPipe implements PipeTransform {
  transform(products: Product[], showHide: boolean = true): Product[] {
    if (showHide) {
      return products.filter((p) => p.category == 'jewelry');
    } else {
      return products;
    }
  }
}
