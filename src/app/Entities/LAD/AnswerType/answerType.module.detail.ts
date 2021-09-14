import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AnswerTypeService } from './answerType.service';
import { AnswerTypeServiceCollection } from './answerType.service.collection';


import { AnswerType_AnswerTypeItem_DetailUI } from './detail/answerType-answerTypeItem.detail';
import { AnswerTypeItem_ModuleMaster } from '../AnswerTypeItem/answerTypeItem.module.master';
import { AnswerType_QuestionaryItem_DetailUI } from './detail/answerType-questionaryItem.detail';
import { QuestionaryItem_ModuleMaster } from '../QuestionaryItem/questionaryItem.module.master';

@NgModule({
  declarations: [
    AnswerType_AnswerTypeItem_DetailUI,
		AnswerType_QuestionaryItem_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AnswerTypeItem_ModuleMaster,
		QuestionaryItem_ModuleMaster,
  ],
  exports: [
    AnswerType_AnswerTypeItem_DetailUI,
		AnswerType_QuestionaryItem_DetailUI
  ],
  
})
export class AnswerType_ModuleDetail { }