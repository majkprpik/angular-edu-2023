import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'priceSort',
})
export class PriceSortPipe implements PipeTransform {
  transform(products: Product[], ascending: boolean = true): Product[] {
    return products.sort((a, b) => {
      if (a.price < b.price) {
        return ascending ? -1 : 1;
      } else if (a.price > b.price) {
        return ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
