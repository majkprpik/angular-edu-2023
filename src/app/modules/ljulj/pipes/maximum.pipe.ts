import { Product } from './../model/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maximum'
})
export class MaximumPipe implements PipeTransform {

  transform(product: Product[], minimum: number): Product[] {
    return product.filter((product)=>product.price<=minimum)
  }

}
