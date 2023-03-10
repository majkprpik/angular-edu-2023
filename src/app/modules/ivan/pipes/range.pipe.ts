import { Product } from './../shared/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(
    product: Product[],
    sliderValue: { min: number; max: number }
  ): Product[] {
    return product.filter((p) => {
      if (p.price >= sliderValue.min && p.price <= sliderValue.max) {
        return true;
      } else {
        return false;
      }
    });
  }
}
