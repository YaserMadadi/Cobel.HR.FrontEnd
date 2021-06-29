import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuestionaryItemService } from './questionaryItem.service';
import { QuestionaryItemServiceCollection } from './questionaryItem.service.collection';


import { QuestionaryItem_CoachingQuestionaryAnswered_DetailUI } from './detail/questionaryItem-coachingQuestionaryAnswered.detail';
import { CoachingQuestionaryAnswered_ModuleMaster } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.master';

@NgModule({
  declarations: [
    QuestionaryItem_CoachingQuestionaryAnswered_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CoachingQuestionaryAnswered_ModuleMaster,
  ],
  exports: [
    QuestionaryItem_CoachingQuestionaryAnswered_DetailUI
  ],
  providers: [
    //QuestionaryItemService,
    //QuestionaryItemServiceCollection
  ]
})
export class QuestionaryItem_ModuleDetail { }