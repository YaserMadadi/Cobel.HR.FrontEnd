import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FeedbackSessionService } from './feedbackSession.service';
import { FeedbackSessionServiceCollection } from './feedbackSession.service.collection';

import { FeedbackSessionIndexUI } from './index/feedbackSession.index';
import { FeedbackSession_ModuleFunc } from './feedbackSession.module.func';
import { FeedbackSession_ModuleMaster } from './feedbackSession.module.master';



@NgModule({
  declarations: [
    FeedbackSessionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FeedbackSession_ModuleMaster,
  ],
  exports: [
    FeedbackSessionIndexUI,
		FeedbackSession_ModuleMaster,
   ]
})
export class FeedbackSessionModule {}