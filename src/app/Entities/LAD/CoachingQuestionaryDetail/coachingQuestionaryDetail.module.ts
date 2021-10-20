import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachingQuestionaryDetailService } from './coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailServiceCollection } from './coachingQuestionaryDetail.service.collection';

import { CoachingQuestionaryDetailIndexUI } from './index/coachingQuestionaryDetail.index';
import { CoachingQuestionaryDetail_ModuleFunc } from './coachingQuestionaryDetail.module.func';
import { CoachingQuestionaryDetail_ModuleMaster } from './coachingQuestionaryDetail.module.master';



@NgModule({
  declarations: [
    CoachingQuestionaryDetailIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CoachingQuestionaryDetail_ModuleMaster,
  ],
  exports: [
    CoachingQuestionaryDetailIndexUI,
		CoachingQuestionaryDetail_ModuleMaster,
   ]
})
export class CoachingQuestionaryDetailModule {}