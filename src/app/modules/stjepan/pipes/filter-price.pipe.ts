import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'filterPrice',
})
export class FilterPricePipe implements PipeTransform {
  transform(
    products: Product[],
    sliderValues: { min: number; max: number }
  ): Product[] {
    return products.filter((p) => {
      if (p.price >= sliderValues.min && p.price <= sliderValues.max) {
        return true;
      } else {
        return false;
      }
    });
  }
}
