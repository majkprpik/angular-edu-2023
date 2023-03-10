import { Product } from './../shared/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(product: Product[], args: string[]): Product[] {
    const sortDirection = args[0];
    if (sortDirection === 'asc') {
      return product.sort((p1, p2) =>
        p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
      );
    } else if (sortDirection === 'desc') {
      return product.sort((p1, p2) =>
        p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
      );
    } else return null;
  }
}
