import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DevelopmentPlanPriority } from '../developmentPlanPriority';
import { DevelopmentPlanPriorityService } from '../developmentPlanPriority.service';
import { DevelopmentPlanPriorityDeleteUI } from '../delete/developmentPlanPriority.delete';
import { DevelopmentPlanPriorityEditUI } from '../edit/developmentPlanPriority.edit';
import { IndividualDevelopmentPlanService } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.service';



@Component({
  selector: 'base-pms-developmentPlanPriority-master',
  templateUrl: './developmentPlanPriority.master.html',
  styleUrls: ['./developmentPlanPriority.master.css'],
  providers: [
    DevelopmentPlanPriorityService,
    IndividualDevelopmentPlanService,
  ]
})
export class DevelopmentPlanPriorityMasterUI extends MasterModal<DevelopmentPlanPriority> {

  constructor(private developmentPlanPriorityService: DevelopmentPlanPriorityService) {
    super(developmentPlanPriorityService);
  }
}