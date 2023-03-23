import { Product } from './../models/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  numbers = [];

  transform(value: any, sort: string): Product[] {
    if (sort === 'desc') {
      return value.sort((a: Product, b: Product) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return value.sort((a: Product, b: Product) => {
        if (a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
}
