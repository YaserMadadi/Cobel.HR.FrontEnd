import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actionToWord'
})
export class ActionToWordPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    switch (value){
      case 1: 
        return 'ویرایش نامه';
        case 2: 
        return 'پیگیـــری';
        case 3: 
        return 'پاســـخ';
        case 4: 
        return 'ارجــــاع';
        
    }

  }

}
