import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachingQuestionaryService } from './coachingQuestionary.service';
import { CoachingQuestionaryServiceCollection } from './coachingQuestionary.service.collection';

import { CoachingQuestionaryIndexUI } from './index/coachingQuestionary.index';
import { CoachingQuestionary_ModuleFunc } from './coachingQuestionary.module.func';
import { CoachingQuestionary_ModuleMaster } from './coachingQuestionary.module.master';


import { CoachingQuestionaryAnswered_ModuleFunc } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.func';
import { CoachingQuestionaryAnswered_ModuleMaster } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.master';
import { CoachingQuestionaryDetail_ModuleFunc } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail.module.func';
import { CoachingQuestionaryDetail_ModuleMaster } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail.module.master';

@NgModule({
  declarations: [
    CoachingQuestionaryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CoachingQuestionary_ModuleMaster,
		CoachingQuestionaryAnswered_ModuleMaster,
		CoachingQuestionaryDetail_ModuleMaster,
  ],
  exports: [
    CoachingQuestionaryIndexUI,
		CoachingQuestionary_ModuleMaster,
  ],
  providers: [
    // CoachingQuestionaryService,
    // CoachingQuestionaryServiceCollection
  ]
})
export class CoachingQuestionaryModule {}