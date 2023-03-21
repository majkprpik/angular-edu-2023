import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';
import { SliderValues } from '../services/products/product-service.service';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {

  transform(value: Product[], priceRange : SliderValues): any {
    return value.filter((data : any) => {
      return priceRange.min <= data.price && data.price <= priceRange.max;
    });
  }
}
