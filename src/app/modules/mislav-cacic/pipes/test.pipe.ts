import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: Product[], price: number): Product[] {
    return value.filter((data: any) => {
      return data.price > price;
    });
  }
}
