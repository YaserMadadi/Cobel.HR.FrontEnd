import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitToHas'
})
export class BitToHasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === true ? 'Contain' : 'No Contain';
  }

}
