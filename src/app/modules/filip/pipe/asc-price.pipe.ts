import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascPrice'
})
export class AscPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
