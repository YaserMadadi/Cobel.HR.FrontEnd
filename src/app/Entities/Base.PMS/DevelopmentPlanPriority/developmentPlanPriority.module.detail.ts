import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanPriorityService } from './developmentPlanPriority.service';
import { DevelopmentPlanPriorityServiceCollection } from './developmentPlanPriority.service.collection';


import { Priority_IndividualDevelopmentPlan_DetailUI } from './detail/priority-individualDevelopmentPlan.detail';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    Priority_IndividualDevelopmentPlan_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    Priority_IndividualDevelopmentPlan_DetailUI
  ],
  providers: [
    //DevelopmentPlanPriorityService,
    //DevelopmentPlanPriorityServiceCollection
  ]
})
export class DevelopmentPlanPriority_ModuleDetail { }