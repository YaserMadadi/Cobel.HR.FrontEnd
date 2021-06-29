import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitToBlock'
})
export class BitToBlockPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    return value === true ? "بلاک شده" : "آزاد";
  }

}
