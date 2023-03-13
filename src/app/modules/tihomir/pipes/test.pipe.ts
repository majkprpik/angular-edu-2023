import { SliderValues } from './../services/product-service.service';
import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

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
