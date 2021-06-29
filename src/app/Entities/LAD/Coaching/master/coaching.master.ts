import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';
import { CoachingDeleteUI } from '../delete/coaching.delete';
import { CoachingEditUI } from '../edit/coaching.edit';
import { CoachingSessionService } from '../../CoachingSession/coachingSession.service';
import { AssessmentCoachingService } from '../../AssessmentCoaching/assessmentCoaching.service';



@Component({
  selector: 'lad-coaching-master',
  templateUrl: './coaching.master.html',
  styleUrls: ['./coaching.master.css'],
  providers: [
    CoachingService,
    CoachingSessionService,
		AssessmentCoachingService,
  ]
})
export class CoachingMasterUI extends MasterModal<Coaching> {

  constructor(private coachingService: CoachingService) {
    super(coachingService);
  }
}