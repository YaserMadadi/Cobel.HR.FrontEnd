import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { YearQuarter } from '../yearQuarter';
import { YearQuarterService } from '../yearQuarter.service';
import { YearQuarterDeleteUI } from '../delete/yearQuarter.delete';
import { YearQuarterEditUI } from '../edit/yearQuarter.edit';
import { AssessmentTrainingService } from '../../../LAD/AssessmentTraining/assessmentTraining.service';



@Component({
  selector: 'base-yearQuarter-master',
  templateUrl: './yearQuarter.master.html',
  styleUrls: ['./yearQuarter.master.css'],
  
})
export class YearQuarterMasterUI extends MasterModal<YearQuarter> {

  constructor(private yearQuarterService: YearQuarterService) {
    super(yearQuarterService);
  }
}