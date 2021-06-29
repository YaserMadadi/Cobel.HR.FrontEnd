import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { QuestionaryTypeService } from './questionaryType.service';
import { QuestionaryTypeServiceCollection } from './questionaryType.service.collection';

import { QuestionaryTypeIndexUI } from './index/questionaryType.index';
import { QuestionaryType_ModuleFunc } from './questionaryType.module.func';
import { QuestionaryType_ModuleMaster } from './questionaryType.module.master';


import { CoachingQuestionary_ModuleFunc } from '../CoachingQuestionary/coachingQuestionary.module.func';
import { CoachingQuestionary_ModuleMaster } from '../CoachingQuestionary/coachingQuestionary.module.master';
import { QuestionaryItem_ModuleFunc } from '../QuestionaryItem/questionaryItem.module.func';
import { QuestionaryItem_ModuleMaster } from '../QuestionaryItem/questionaryItem.module.master';

@NgModule({
  declarations: [
    QuestionaryTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    QuestionaryType_ModuleMaster,
		CoachingQuestionary_ModuleMaster,
		QuestionaryItem_ModuleMaster,
  ],
  exports: [
    QuestionaryTypeIndexUI,
		QuestionaryType_ModuleMaster,
  ],
  providers: [
    // QuestionaryTypeService,
    // QuestionaryTypeServiceCollection
  ]
})
export class QuestionaryTypeModule {}