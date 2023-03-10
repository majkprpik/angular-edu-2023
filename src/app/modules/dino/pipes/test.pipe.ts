import { Product } from './../models/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {

  // transform(value: any, parnost: string): any {
  //   //console.log(value);
  //   if (parnost == 'parni') {
  //     return value.filter((x) => x % 2 == 0);
  //   } else if (parnost == 'neparni') {
  //     return value.filter((x) => x % 2 != 0);
  //   }
  // }
  
  // transform(product:Product[],limit:number):Product[]{
  //   return product.filter((product)=>product.price<=limit)
  // }

  transform(product: Product[], criteria: boolean):Product[] {
    if(criteria==false){  
    return product.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
    }else if(criteria==true){
      return product.sort((p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
    }
    else return null;
  }

}
