import { Product } from './../models/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: any, priceMax: number, priceMin: number): Product[] {
    return value.filter((p) => {
      return p.price <= priceMax && p.price >= priceMin;
    });
  }
}
