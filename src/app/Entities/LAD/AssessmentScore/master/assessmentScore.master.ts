import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AssessmentScore } from '../assessmentScore';
import { AssessmentScoreService } from '../assessmentScore.service';
import { AssessmentScoreDeleteUI } from '../delete/assessmentScore.delete';
import { AssessmentScoreEditUI } from '../edit/assessmentScore.edit';



@Component({
  selector: 'lad-assessmentScore-master',
  templateUrl: './assessmentScore.master.html',
  styleUrls: ['./assessmentScore.master.css'],
  providers: [
    AssessmentScoreService,
    
  ]
})
export class AssessmentScoreMasterUI extends MasterModal<AssessmentScore> {

  constructor(private assessmentScoreService: AssessmentScoreService) {
    super(assessmentScoreService);
  }
}