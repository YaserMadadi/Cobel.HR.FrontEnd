import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AssessmentTraining } from '../assessmentTraining';
import { AssessmentTrainingService } from '../assessmentTraining.service';


@Component({
  selector: 'lad-assessmentTraining-delete',
  templateUrl: './assessmentTraining.delete.html',
  styleUrls: ['./assessmentTraining.delete.css'],
  providers: [AssessmentTrainingService]
})
export class AssessmentTrainingDeleteUI extends DeleteModal<AssessmentTraining> {

    constructor(private assessmentTrainingService: AssessmentTrainingService){
        super(assessmentTrainingService);
    }

}