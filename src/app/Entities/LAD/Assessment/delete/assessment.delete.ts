import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';


@Component({
  selector: 'lad-assessment-delete',
  templateUrl: './assessment.delete.html',
  styleUrls: ['./assessment.delete.css'],
  
})
export class AssessmentDeleteUI extends DeleteModal<Assessment> {

    constructor(private assessmentService: AssessmentService){
        super(assessmentService);
    }

}