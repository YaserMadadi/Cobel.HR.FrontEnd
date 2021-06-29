import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Quarter } from '../quarter';
import { QuarterService } from '../quarter.service';
import { QuarterDeleteUI } from '../delete/quarter.delete';
import { QuarterEditUI } from '../edit/quarter.edit';
import { YearQuarterService } from '../../YearQuarter/yearQuarter.service';



@Component({
  selector: 'base-quarter-master',
  templateUrl: './quarter.master.html',
  styleUrls: ['./quarter.master.css'],
  providers: [
    QuarterService,
    YearQuarterService,
  ]
})
export class QuarterMasterUI extends MasterModal<Quarter> {

  constructor(private quarterService: QuarterService) {
    super(quarterService);
  }
}