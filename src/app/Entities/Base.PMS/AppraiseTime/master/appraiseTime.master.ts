import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';
import { AppraiseTimeDeleteUI } from '../delete/appraiseTime.delete';
import { AppraiseTimeEditUI } from '../edit/appraiseTime.edit';
import { BehavioralAppraiseService } from '../../../PMS/BehavioralAppraise/behavioralAppraise.service';
import { FunctionalAppraiseService } from '../../../PMS/FunctionalAppraise/functionalAppraise.service';
import { QualitativeAppraiseService } from '../../../PMS/QualitativeAppraise/qualitativeAppraise.service';



@Component({
  selector: 'base-pms-appraiseTime-master',
  templateUrl: './appraiseTime.master.html',
  styleUrls: ['./appraiseTime.master.css'],
  providers: [
    AppraiseTimeService,
    BehavioralAppraiseService,
		FunctionalAppraiseService,
		QualitativeAppraiseService,
  ]
})
export class AppraiseTimeMasterUI extends MasterModal<AppraiseTime> {

  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService);
  }
}