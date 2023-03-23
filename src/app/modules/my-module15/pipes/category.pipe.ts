import { Product } from './../models/Products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (category) {
      return products.filter((p) => p.category == category);
    } else {
      return products;
    }
  }
}
