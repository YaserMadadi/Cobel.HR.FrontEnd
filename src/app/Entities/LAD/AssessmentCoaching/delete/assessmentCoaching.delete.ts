import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AssessmentCoaching } from '../assessmentCoaching';
import { AssessmentCoachingService } from '../assessmentCoaching.service';


@Component({
  selector: 'lad-assessmentCoaching-delete',
  templateUrl: './assessmentCoaching.delete.html',
  styleUrls: ['./assessmentCoaching.delete.css'],
  providers: [AssessmentCoachingService]
})
export class AssessmentCoachingDeleteUI extends DeleteModal<AssessmentCoaching> {

    constructor(private assessmentCoachingService: AssessmentCoachingService){
        super(assessmentCoachingService);
    }

}