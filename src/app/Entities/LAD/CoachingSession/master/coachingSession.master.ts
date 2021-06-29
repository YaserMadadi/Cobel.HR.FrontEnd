import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CoachingSession } from '../coachingSession';
import { CoachingSessionService } from '../coachingSession.service';
import { CoachingSessionDeleteUI } from '../delete/coachingSession.delete';
import { CoachingSessionEditUI } from '../edit/coachingSession.edit';



@Component({
  selector: 'lad-coachingSession-master',
  templateUrl: './coachingSession.master.html',
  styleUrls: ['./coachingSession.master.css'],
  providers: [
    CoachingSessionService,
    
  ]
})
export class CoachingSessionMasterUI extends MasterModal<CoachingSession> {

  constructor(private coachingSessionService: CoachingSessionService) {
    super(coachingSessionService);
  }
}