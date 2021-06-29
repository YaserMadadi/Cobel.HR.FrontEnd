import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AssessmentTraining } from '../assessmentTraining';
import { AssessmentTrainingService } from '../assessmentTraining.service';
import { AssessmentTrainingDeleteUI } from '../delete/assessmentTraining.delete';
import { AssessmentTrainingEditUI } from '../edit/assessmentTraining.edit';



@Component({
  selector: 'lad-assessmentTraining-master',
  templateUrl: './assessmentTraining.master.html',
  styleUrls: ['./assessmentTraining.master.css'],
  providers: [
    AssessmentTrainingService,
    
  ]
})
export class AssessmentTrainingMasterUI extends MasterModal<AssessmentTraining> {

  constructor(private assessmentTrainingService: AssessmentTrainingService) {
    super(assessmentTrainingService);
  }
}