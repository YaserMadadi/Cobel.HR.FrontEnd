import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseTimeService } from './appraiseTime.service';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';


import { AppraiseTime_BehavioralAppraise_DetailUI } from './detail/appraiseTime-behavioralAppraise.detail';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { AppraiseTime_FunctionalAppraise_DetailUI } from './detail/appraiseTime-functionalAppraise.detail';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { AppraiseTime_QualitativeAppraise_DetailUI } from './detail/appraiseTime-qualitativeAppraise.detail';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    AppraiseTime_BehavioralAppraise_DetailUI,
		AppraiseTime_FunctionalAppraise_DetailUI,
		AppraiseTime_QualitativeAppraise_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		BehavioralAppraise_ModuleMaster,
		FunctionalAppraise_ModuleMaster,
		QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    AppraiseTime_BehavioralAppraise_DetailUI,
		AppraiseTime_FunctionalAppraise_DetailUI,
		AppraiseTime_QualitativeAppraise_DetailUI
  ],
  providers: [
    //AppraiseTimeService,
    //AppraiseTimeServiceCollection
  ]
})
export class AppraiseTime_ModuleDetail { }