import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingService } from './coaching.service';
import { CoachingServiceCollection } from './coaching.service.collection';


import { Coaching_AssessmentCoaching_DetailUI } from './detail/coaching-assessmentCoaching.detail';
import { AssessmentCoaching_ModuleMaster } from '../AssessmentCoaching/assessmentCoaching.module.master';
import { Coaching_CoachingSession_DetailUI } from './detail/coaching-coachingSession.detail';
import { CoachingSession_ModuleMaster } from '../CoachingSession/coachingSession.module.master';

@NgModule({
  declarations: [
    Coaching_AssessmentCoaching_DetailUI,
		Coaching_CoachingSession_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AssessmentCoaching_ModuleMaster,
		CoachingSession_ModuleMaster,
  ],
  exports: [
    Coaching_AssessmentCoaching_DetailUI,
		Coaching_CoachingSession_DetailUI
  ],
  providers: [
    //CoachingService,
    //CoachingServiceCollection
  ]
})
export class Coaching_ModuleDetail { }