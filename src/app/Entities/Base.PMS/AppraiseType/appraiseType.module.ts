import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AppraiseTypeService } from './appraiseType.service';
import { AppraiseTypeServiceCollection } from './appraiseType.service.collection';

import { AppraiseTypeIndexUI } from './index/appraiseType.index';
import { AppraiseType_ModuleFunc } from './appraiseType.module.func';
import { AppraiseType_ModuleMaster } from './appraiseType.module.master';


import { BehavioralAppraise_ModuleFunc } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.func';
import { BehavioralAppraise_ModuleMaster } from '../../PMS/BehavioralAppraise/behavioralAppraise.module.master';
import { FunctionalAppraise_ModuleFunc } from '../../PMS/FunctionalAppraise/functionalAppraise.module.func';
import { FunctionalAppraise_ModuleMaster } from '../../PMS/FunctionalAppraise/functionalAppraise.module.master';
import { QualitativeAppraise_ModuleFunc } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.func';
import { QualitativeAppraise_ModuleMaster } from '../../PMS/QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    AppraiseTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AppraiseType_ModuleMaster,
		BehavioralAppraise_ModuleMaster,
		FunctionalAppraise_ModuleMaster,
		QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    AppraiseTypeIndexUI,
		AppraiseType_ModuleMaster,
  ],
  providers: [
    // AppraiseTypeService,
    // AppraiseTypeServiceCollection
  ]
})
export class AppraiseTypeModule {}