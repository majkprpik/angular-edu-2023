import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: Product[], price: number): any {
    return value.filter((p) => {
      return p.price <= price;
    });
  }
}
