import { Product } from './../models/Products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: Product[], ascending: boolean = true): any {
    let tempasc = ascending ? 1 : -1;
    return value.sort((a: Product, b: Product) => {
      return a.price < b.price ? -1 * tempasc : 1 * tempasc;
    });
  }
}
