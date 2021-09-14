import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessmentScoreService } from './assessmentScore.service';
import { AssessmentScoreServiceCollection } from './assessmentScore.service.collection';

import { AssessmentScoreIndexUI } from './index/assessmentScore.index';
import { AssessmentScore_ModuleFunc } from './assessmentScore.module.func';
import { AssessmentScore_ModuleMaster } from './assessmentScore.module.master';



@NgModule({
  declarations: [
    AssessmentScoreIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AssessmentScore_ModuleMaster,
  ],
  exports: [
    AssessmentScoreIndexUI,
		AssessmentScore_ModuleMaster,
   ]
})
export class AssessmentScoreModule {}