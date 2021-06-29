import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseTypeService } from './appraiseType.service';
import { AppraiseTypeServiceCollection } from './appraiseType.service.collection';


import { AppraiseType_BehavioralAppraise_DetailUI } from './detail/appraiseType-behavioralAppraise.detail';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { AppraiseType_FunctionalAppraise_DetailUI } from './detail/appraiseType-functionalAppraise.detail';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { AppraiseType_QualitativeAppraise_DetailUI } from './detail/appraiseType-qualitativeAppraise.detail';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    AppraiseType_BehavioralAppraise_DetailUI,
		AppraiseType_FunctionalAppraise_DetailUI,
		AppraiseType_QualitativeAppraise_DetailUI
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
    AppraiseType_BehavioralAppraise_DetailUI,
		AppraiseType_FunctionalAppraise_DetailUI,
		AppraiseType_QualitativeAppraise_DetailUI
  ],
  providers: [
    //AppraiseTypeService,
    //AppraiseTypeServiceCollection
  ]
})
export class AppraiseType_ModuleDetail { }