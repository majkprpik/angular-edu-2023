import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Products';

@Pipe({
  name: 'sortPrice',
})
export class SortPricePipe implements PipeTransform {
  transform(products: Product[], ascending: boolean = true): Product[] {
    if (ascending) {
      return products.sort((a, b) => a.price - b.price);
    } else {
      return products.sort((a, b) => b.price - a.price);
    }
  }
}
