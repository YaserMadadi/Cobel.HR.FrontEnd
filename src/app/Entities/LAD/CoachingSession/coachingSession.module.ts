import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachingSessionService } from './coachingSession.service';
import { CoachingSessionServiceCollection } from './coachingSession.service.collection';

import { CoachingSessionIndexUI } from './index/coachingSession.index';
import { CoachingSession_ModuleFunc } from './coachingSession.module.func';
import { CoachingSession_ModuleMaster } from './coachingSession.module.master';



@NgModule({
  declarations: [
    CoachingSessionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CoachingSession_ModuleMaster,
  ],
  exports: [
    CoachingSessionIndexUI,
		CoachingSession_ModuleMaster,
  ],
  providers: [
    // CoachingSessionService,
    // CoachingSessionServiceCollection
  ]
})
export class CoachingSessionModule {}