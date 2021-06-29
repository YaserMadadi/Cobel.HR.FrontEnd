import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitToActive'
})
export class BitToActivePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === true ? 'Active' : 'InActive';
  }

}
