import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessmentCoachingService } from './assessmentCoaching.service';
import { AssessmentCoachingServiceCollection } from './assessmentCoaching.service.collection';

import { AssessmentCoachingIndexUI } from './index/assessmentCoaching.index';
import { AssessmentCoaching_ModuleFunc } from './assessmentCoaching.module.func';
import { AssessmentCoaching_ModuleMaster } from './assessmentCoaching.module.master';



@NgModule({
  declarations: [
    AssessmentCoachingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AssessmentCoaching_ModuleMaster,
  ],
  exports: [
    AssessmentCoachingIndexUI,
		AssessmentCoaching_ModuleMaster,
  ],
  providers: [
    // AssessmentCoachingService,
    // AssessmentCoachingServiceCollection
  ]
})
export class AssessmentCoachingModule {}