import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
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
