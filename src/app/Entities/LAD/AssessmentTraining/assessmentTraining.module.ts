import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessmentTrainingService } from './assessmentTraining.service';
import { AssessmentTrainingServiceCollection } from './assessmentTraining.service.collection';

import { AssessmentTrainingIndexUI } from './index/assessmentTraining.index';
import { AssessmentTraining_ModuleFunc } from './assessmentTraining.module.func';
import { AssessmentTraining_ModuleMaster } from './assessmentTraining.module.master';



@NgModule({
  declarations: [
    AssessmentTrainingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AssessmentTraining_ModuleMaster,
  ],
  exports: [
    AssessmentTrainingIndexUI,
		AssessmentTraining_ModuleMaster,
  ],
  providers: [
    // AssessmentTrainingService,
    // AssessmentTrainingServiceCollection
  ]
})
export class AssessmentTrainingModule {}