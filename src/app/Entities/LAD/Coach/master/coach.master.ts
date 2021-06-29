import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Coach } from '../coach';
import { CoachService } from '../coach.service';
import { CoachDeleteUI } from '../delete/coach.delete';
import { CoachEditUI } from '../edit/coach.edit';
import { CoachingService } from '../../Coaching/coaching.service';
import { CoachConnectionLineService } from '../../CoachConnectionLine/coachConnectionLine.service';



@Component({
  selector: 'lad-coach-master',
  templateUrl: './coach.master.html',
  styleUrls: ['./coach.master.css'],
  providers: [
    CoachService,
    CoachingService,
		CoachConnectionLineService,
  ]
})
export class CoachMasterUI extends MasterModal<Coach> {

  constructor(private coachService: CoachService) {
    super(coachService);
  }
}