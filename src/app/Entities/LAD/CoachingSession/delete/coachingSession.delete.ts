import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CoachingSession } from '../coachingSession';
import { CoachingSessionService } from '../coachingSession.service';


@Component({
  selector: 'lad-coachingSession-delete',
  templateUrl: './coachingSession.delete.html',
  styleUrls: ['./coachingSession.delete.css'],
  
})
export class CoachingSessionDeleteUI extends DeleteModal<CoachingSession> {

    constructor(private coachingSessionService: CoachingSessionService){
        super(coachingSessionService);
    }

}