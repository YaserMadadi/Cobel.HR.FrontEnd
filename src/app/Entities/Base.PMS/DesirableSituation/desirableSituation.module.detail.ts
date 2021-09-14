import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DesirableSituationService } from './desirableSituation.service';
import { DesirableSituationServiceCollection } from './desirableSituation.service.collection';


import { DesirableSituation_IndividualDevelopmentPlan_DetailUI } from './detail/desirableSituation-individualDevelopmentPlan.detail';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    DesirableSituation_IndividualDevelopmentPlan_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    DesirableSituation_IndividualDevelopmentPlan_DetailUI
  ],
  
})
export class DesirableSituation_ModuleDetail { }