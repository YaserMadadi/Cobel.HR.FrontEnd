import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachingService } from './coaching.service';
import { CoachingServiceCollection } from './coaching.service.collection';

import { CoachingIndexUI } from './index/coaching.index';
import { Coaching_ModuleFunc } from './coaching.module.func';
import { Coaching_ModuleMaster } from './coaching.module.master';


import { AssessmentCoaching_ModuleFunc } from '../AssessmentCoaching/assessmentCoaching.module.func';
import { AssessmentCoaching_ModuleMaster } from '../AssessmentCoaching/assessmentCoaching.module.master';
import { CoachingSession_ModuleFunc } from '../CoachingSession/coachingSession.module.func';
import { CoachingSession_ModuleMaster } from '../CoachingSession/coachingSession.module.master';

@NgModule({
  declarations: [
    CoachingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Coaching_ModuleMaster,
		AssessmentCoaching_ModuleMaster,
		CoachingSession_ModuleMaster,
  ],
  exports: [
    CoachingIndexUI,
		Coaching_ModuleMaster,
   ]
})
export class CoachingModule {}