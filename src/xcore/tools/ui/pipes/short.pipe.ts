import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, len: number = 30): any {
    if (!value || value.length <= len)
      return value;
    return value.substring(0, len) + ' ...';
  }

}
