import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { IndividualDevelopmentPlanService } from './individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanServiceCollection } from './individualDevelopmentPlan.service.collection';


import { IndividualDevelopmentPlan_DevelopmentPlanCompetency_DetailUI } from './detail/individualDevelopmentPlan-developmentPlanCompetency.detail';
import { DevelopmentPlanCompetency_ModuleMaster } from '../DevelopmentPlanCompetency/developmentPlanCompetency.module.master';

@NgModule({
  declarations: [
    IndividualDevelopmentPlan_DevelopmentPlanCompetency_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		DevelopmentPlanCompetency_ModuleMaster,
  ],
  exports: [
    IndividualDevelopmentPlan_DevelopmentPlanCompetency_DetailUI
  ],
  
})
export class IndividualDevelopmentPlan_ModuleDetail { }