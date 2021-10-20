import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Year } from '../year';
import { YearService } from '../year.service';


@Component({
  selector: 'base-year-delete',
  templateUrl: './year.delete.html',
  styleUrls: ['./year.delete.css'],
  
})
export class YearDeleteUI extends DeleteModal<Year> {

    constructor(private yearService: YearService){
        super(yearService);
    }

}