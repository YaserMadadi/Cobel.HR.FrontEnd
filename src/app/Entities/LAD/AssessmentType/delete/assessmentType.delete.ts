import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AssessmentType } from '../assessmentType';
import { AssessmentTypeService } from '../assessmentType.service';


@Component({
  selector: 'lad-assessmentType-delete',
  templateUrl: './assessmentType.delete.html',
  styleUrls: ['./assessmentType.delete.css'],
  providers: [AssessmentTypeService]
})
export class AssessmentTypeDeleteUI extends DeleteModal<AssessmentType> {

    constructor(private assessmentTypeService: AssessmentTypeService){
        super(assessmentTypeService);
    }

}