import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isZero'
})
export class IsZeroPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value > 0 ?  value.toString() : 'Zero';
  }

}
