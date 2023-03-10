import { Product } from './../models/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimum'
})
export class MinimumPipe implements PipeTransform {

  transform(product: Product[], minimum:number):Product[] {
    return product.filter((product)=>product.price>=minimum)
  }

}
