import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'biToString'
})
export class BiToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Contain' : 'No Contain';
  }

}
