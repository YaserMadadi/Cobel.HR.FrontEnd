import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AnswerTypeService } from './answerType.service';
import { AnswerTypeServiceCollection } from './answerType.service.collection';

import { AnswerTypeIndexUI } from './index/answerType.index';
import { AnswerType_ModuleFunc } from './answerType.module.func';
import { AnswerType_ModuleMaster } from './answerType.module.master';


import { AnswerTypeItem_ModuleFunc } from '../AnswerTypeItem/answerTypeItem.module.func';
import { AnswerTypeItem_ModuleMaster } from '../AnswerTypeItem/answerTypeItem.module.master';
import { QuestionaryItem_ModuleFunc } from '../QuestionaryItem/questionaryItem.module.func';
import { QuestionaryItem_ModuleMaster } from '../QuestionaryItem/questionaryItem.module.master';

@NgModule({
  declarations: [
    AnswerTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AnswerType_ModuleMaster,
		AnswerTypeItem_ModuleMaster,
		QuestionaryItem_ModuleMaster,
  ],
  exports: [
    AnswerTypeIndexUI,
		AnswerType_ModuleMaster,
   ]
})
export class AnswerTypeModule {}