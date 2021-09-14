import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryService } from './coachingQuestionary.service';
import { CoachingQuestionaryServiceCollection } from './coachingQuestionary.service.collection';


import { CoachingQuestionary_CoachingQuestionaryAnswered_DetailUI } from './detail/coachingQuestionary-coachingQuestionaryAnswered.detail';
import { CoachingQuestionaryAnswered_ModuleMaster } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module.master';
import { CoachingQuestionary_CoachingQuestionaryDetail_DetailUI } from './detail/coachingQuestionary-coachingQuestionaryDetail.detail';
import { CoachingQuestionaryDetail_ModuleMaster } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail.module.master';

@NgModule({
  declarations: [
    CoachingQuestionary_CoachingQuestionaryAnswered_DetailUI,
		CoachingQuestionary_CoachingQuestionaryDetail_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CoachingQuestionaryAnswered_ModuleMaster,
		CoachingQuestionaryDetail_ModuleMaster,
  ],
  exports: [
    CoachingQuestionary_CoachingQuestionaryAnswered_DetailUI,
		CoachingQuestionary_CoachingQuestionaryDetail_DetailUI
  ],
  
})
export class CoachingQuestionary_ModuleDetail { }