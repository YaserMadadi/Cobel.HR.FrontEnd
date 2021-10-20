import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuestionaryTypeService } from './questionaryType.service';
import { QuestionaryTypeServiceCollection } from './questionaryType.service.collection';


import { QuestionaryType_CoachingQuestionary_DetailUI } from './detail/questionaryType-coachingQuestionary.detail';
import { CoachingQuestionary_ModuleMaster } from '../CoachingQuestionary/coachingQuestionary.module.master';
import { QuestionaryType_QuestionaryItem_DetailUI } from './detail/questionaryType-questionaryItem.detail';
import { QuestionaryItem_ModuleMaster } from '../QuestionaryItem/questionaryItem.module.master';

@NgModule({
  declarations: [
    QuestionaryType_CoachingQuestionary_DetailUI,
		QuestionaryType_QuestionaryItem_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CoachingQuestionary_ModuleMaster,
		QuestionaryItem_ModuleMaster,
  ],
  exports: [
    QuestionaryType_CoachingQuestionary_DetailUI,
		QuestionaryType_QuestionaryItem_DetailUI
  ],
  
})
export class QuestionaryType_ModuleDetail { }