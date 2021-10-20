import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseTimeService } from './appraiseTime.service';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';


import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
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
  ]
})
export class AppraiseTime_ModuleDetail { }