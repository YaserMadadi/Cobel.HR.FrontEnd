import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachingQuestionaryAnsweredService } from './coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredServiceCollection } from './coachingQuestionaryAnswered.service.collection';

import { CoachingQuestionaryAnsweredIndexUI } from './index/coachingQuestionaryAnswered.index';
import { CoachingQuestionaryAnswered_ModuleFunc } from './coachingQuestionaryAnswered.module.func';
import { CoachingQuestionaryAnswered_ModuleMaster } from './coachingQuestionaryAnswered.module.master';



@NgModule({
  declarations: [
    CoachingQuestionaryAnsweredIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CoachingQuestionaryAnswered_ModuleMaster,
  ],
  exports: [
    CoachingQuestionaryAnsweredIndexUI,
		CoachingQuestionaryAnswered_ModuleMaster,
  ],
  providers: [
    // CoachingQuestionaryAnsweredService,
    // CoachingQuestionaryAnsweredServiceCollection
  ]
})
export class CoachingQuestionaryAnsweredModule {}