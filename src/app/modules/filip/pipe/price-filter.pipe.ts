import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(product: Product[], price:number ): any {
    return product.filter((p)=>{
      return p.price<=price;
     })
    }
}
