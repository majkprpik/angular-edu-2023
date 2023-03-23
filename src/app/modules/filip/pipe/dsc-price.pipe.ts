import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dscPrice',
})
export class DscPricePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
