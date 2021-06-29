import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessmentTypeService } from './assessmentType.service';
import { AssessmentTypeServiceCollection } from './assessmentType.service.collection';

import { AssessmentTypeIndexUI } from './index/assessmentType.index';
import { AssessmentType_ModuleFunc } from './assessmentType.module.func';
import { AssessmentType_ModuleMaster } from './assessmentType.module.master';


import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Assessment_ModuleMaster } from '../Assessment/assessment.module.master';

@NgModule({
  declarations: [
    AssessmentTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AssessmentType_ModuleMaster,
		Assessment_ModuleMaster,
  ],
  exports: [
    AssessmentTypeIndexUI,
		AssessmentType_ModuleMaster,
  ],
  providers: [
    // AssessmentTypeService,
    // AssessmentTypeServiceCollection
  ]
})
export class AssessmentTypeModule {}