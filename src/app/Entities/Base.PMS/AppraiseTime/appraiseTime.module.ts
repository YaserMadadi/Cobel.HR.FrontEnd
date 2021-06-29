import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AppraiseTimeService } from './appraiseTime.service';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';

import { AppraiseTimeIndexUI } from './index/appraiseTime.index';
import { AppraiseTime_ModuleFunc } from './appraiseTime.module.func';
import { AppraiseTime_ModuleMaster } from './appraiseTime.module.master';


import { BehavioralAppraise_ModuleFunc } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.func';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { FunctionalAppraise_ModuleFunc } from '../../PMS/FunctionalAppraise/functionalAppraise.module.func';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { QualitativeAppraise_ModuleFunc } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.func';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    AppraiseTimeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AppraiseTime_ModuleMaster,
		BehavioralAppraise_ModuleMaster,
		FunctionalAppraise_ModuleMaster,
		QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    AppraiseTimeIndexUI,
		AppraiseTime_ModuleMaster,
  ],
  providers: [
    // AppraiseTimeService,
    // AppraiseTimeServiceCollection
  ]
})
export class AppraiseTimeModule {}