import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Quarter } from '../quarter';
import { QuarterService } from '../quarter.service';


@Component({
  selector: 'base-quarter-delete',
  templateUrl: './quarter.delete.html',
  styleUrls: ['./quarter.delete.css'],
  providers: [QuarterService]
})
export class QuarterDeleteUI extends DeleteModal<Quarter> {

    constructor(private quarterService: QuarterService){
        super(quarterService);
    }

}