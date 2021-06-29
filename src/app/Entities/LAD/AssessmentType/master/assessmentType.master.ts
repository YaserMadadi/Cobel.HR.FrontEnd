import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AssessmentType } from '../assessmentType';
import { AssessmentTypeService } from '../assessmentType.service';
import { AssessmentTypeDeleteUI } from '../delete/assessmentType.delete';
import { AssessmentTypeEditUI } from '../edit/assessmentType.edit';
import { AssessmentService } from '../../Assessment/assessment.service';



@Component({
  selector: 'lad-assessmentType-master',
  templateUrl: './assessmentType.master.html',
  styleUrls: ['./assessmentType.master.css'],
  providers: [
    AssessmentTypeService,
    AssessmentService,
  ]
})
export class AssessmentTypeMasterUI extends MasterModal<AssessmentType> {

  constructor(private assessmentTypeService: AssessmentTypeService) {
    super(assessmentTypeService);
  }
}