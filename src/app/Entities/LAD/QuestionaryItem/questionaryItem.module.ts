import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QuestionaryItemService } from './questionaryItem.service';
import { QuestionaryItemServiceCollection } from './questionaryItem.service.collection';

import { QuestionaryItemIndexUI } from './index/questionaryItem.index';
import { QuestionaryItem_ModuleFunc } from './questionaryItem.module.func';
import { QuestionaryItem_ModuleMaster } from './questionaryItem.module.master';


import { CoachingQuestionaryAnswered_ModuleFunc } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.func';
import { CoachingQuestionaryAnswered_ModuleMaster } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.master';

@NgModule({
  declarations: [
    QuestionaryItemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QuestionaryItem_ModuleMaster,
		CoachingQuestionaryAnswered_ModuleMaster,
  ],
  exports: [
    QuestionaryItemIndexUI,
		QuestionaryItem_ModuleMaster,
   ]
})
export class QuestionaryItemModule {}