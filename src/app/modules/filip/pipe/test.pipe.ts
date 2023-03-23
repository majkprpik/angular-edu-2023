import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, parnost:string): unknown {
    return "MJ is the G.O.A.T." ;
  }

}
