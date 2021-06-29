import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CurrentSituationService } from './currentSituation.service';
import { CurrentSituationServiceCollection } from './currentSituation.service.collection';


import { CurrentSituation_IndividualDevelopmentPlan_DetailUI } from './detail/currentSituation-individualDevelopmentPlan.detail';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    CurrentSituation_IndividualDevelopmentPlan_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    CurrentSituation_IndividualDevelopmentPlan_DetailUI
  ],
  providers: [
    //CurrentSituationService,
    //CurrentSituationServiceCollection
  ]
})
export class CurrentSituation_ModuleDetail { }