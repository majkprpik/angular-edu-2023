import { Product } from './../models/product';
import { ProductServiceService } from './../services/product-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {

  transform(value: Product[], price: number): any {
    return value.filter((data : any) => {
      return data.price > price;
    });
  }
}
