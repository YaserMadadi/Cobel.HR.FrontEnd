import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { YearQuarter } from '../yearQuarter';
import { YearQuarterService } from '../yearQuarter.service';


@Component({
  selector: 'base-yearQuarter-delete',
  templateUrl: './yearQuarter.delete.html',
  styleUrls: ['./yearQuarter.delete.css'],
  providers: [YearQuarterService]
})
export class YearQuarterDeleteUI extends DeleteModal<YearQuarter> {

    constructor(private yearQuarterService: YearQuarterService){
        super(yearQuarterService);
    }

}