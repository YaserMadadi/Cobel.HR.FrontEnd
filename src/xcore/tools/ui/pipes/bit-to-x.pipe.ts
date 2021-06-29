import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitToX'
})
export class BitToXPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value == true ? args + ' شـــده' : args + ' نشـــده';
  }

}
