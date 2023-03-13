import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maximum'
})
export class MaximumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
