import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/Product';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: Product[], ascending: boolean): any {
    return value.sort((a: Product, b: Product) => {
      return a.price < b.price ? 1 : -1;
    });
  }
}
