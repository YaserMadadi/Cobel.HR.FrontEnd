import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';
import { AppraiseTypeDeleteUI } from '../delete/appraiseType.delete';
import { AppraiseTypeEditUI } from '../edit/appraiseType.edit';
import { BehavioralAppraiseService } from '../../../PMS/BehavioralAppraise/behavioralAppraise.service';
import { FunctionalAppraiseService } from '../../../PMS/FunctionalAppraise/functionalAppraise.service';
import { QualitativeAppraiseService } from '../../../PMS/QualitativeAppraise/qualitativeAppraise.service';



@Component({
  selector: 'base-pms-appraiseType-master',
  templateUrl: './appraiseType.master.html',
  styleUrls: ['./appraiseType.master.css'],
  providers: [
    AppraiseTypeService,
    BehavioralAppraiseService,
		FunctionalAppraiseService,
		QualitativeAppraiseService,
  ]
})
export class AppraiseTypeMasterUI extends MasterModal<AppraiseType> {

  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService);
  }
}