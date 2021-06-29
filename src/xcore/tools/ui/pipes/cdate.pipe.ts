import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cdate'
})
export class CdatePipe implements PipeTransform {

  transform(value: Date | string, ...args: unknown[]): string {
    let dateValue: Date = new Date();
    if (value instanceof String)
      dateValue = new Date(value);
    else
      dateValue = <Date>value;
      console.log(dateValue);
      
    console.log('Year : ', dateValue.getFullYear());
    return `${dateValue.getFullYear()}-${dateValue.getMonth()}-${dateValue.getDate()}`;
  }

}
