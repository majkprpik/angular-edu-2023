import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimum'
})
export class MinimumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
