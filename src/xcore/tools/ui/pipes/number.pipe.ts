import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../../Result';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    let result: string = '';
    
    if (value == null)
      result = '';
    else if (value == 0)
      result = 'Zero';
    else
      result = value.toLocaleString('en');

    return result;

  }

}
