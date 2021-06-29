import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';
import { IndividualDevelopmentPlanService } from '../individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanDeleteUI } from '../delete/individualDevelopmentPlan.delete';
import { IndividualDevelopmentPlanEditUI } from '../edit/individualDevelopmentPlan.edit';
import { DevelopmentPlanCompetencyService } from '../../DevelopmentPlanCompetency/developmentPlanCompetency.service';



@Component({
  selector: 'pms-individualDevelopmentPlan-master',
  templateUrl: './individualDevelopmentPlan.master.html',
  styleUrls: ['./individualDevelopmentPlan.master.css'],
  providers: [
    IndividualDevelopmentPlanService,
    DevelopmentPlanCompetencyService,
  ]
})
export class IndividualDevelopmentPlanMasterUI extends MasterModal<IndividualDevelopmentPlan> {

  constructor(private individualDevelopmentPlanService: IndividualDevelopmentPlanService) {
    super(individualDevelopmentPlanService);
  }
}