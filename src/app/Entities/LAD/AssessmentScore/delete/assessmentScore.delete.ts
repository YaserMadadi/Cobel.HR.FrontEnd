import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AssessmentScore } from '../assessmentScore';
import { AssessmentScoreService } from '../assessmentScore.service';


@Component({
  selector: 'lad-assessmentScore-delete',
  templateUrl: './assessmentScore.delete.html',
  styleUrls: ['./assessmentScore.delete.css'],
  providers: [AssessmentScoreService]
})
export class AssessmentScoreDeleteUI extends DeleteModal<AssessmentScore> {

    constructor(private assessmentScoreService: AssessmentScoreService){
        super(assessmentScoreService);
    }

}