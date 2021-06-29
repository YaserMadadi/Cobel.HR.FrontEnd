import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AssessmentCoaching } from '../assessmentCoaching';
import { AssessmentCoachingService } from '../assessmentCoaching.service';
import { AssessmentCoachingDeleteUI } from '../delete/assessmentCoaching.delete';
import { AssessmentCoachingEditUI } from '../edit/assessmentCoaching.edit';



@Component({
  selector: 'lad-assessmentCoaching-master',
  templateUrl: './assessmentCoaching.master.html',
  styleUrls: ['./assessmentCoaching.master.css'],
  providers: [
    AssessmentCoachingService,
    
  ]
})
export class AssessmentCoachingMasterUI extends MasterModal<AssessmentCoaching> {

  constructor(private assessmentCoachingService: AssessmentCoachingService) {
    super(assessmentCoachingService);
  }
}