import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], sort : string): any {
    return value.sort((a : Product, b: Product) =>{
      if (sort == "ascending") {
        return a.price > b.price ? -1 : 1;
      }
      return a.price < b.price ? -1 : 1;
    });
  }
}
