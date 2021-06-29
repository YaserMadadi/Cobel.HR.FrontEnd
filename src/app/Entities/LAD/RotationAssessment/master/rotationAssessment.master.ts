import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { RotationAssessment } from '../rotationAssessment';
import { RotationAssessmentService } from '../rotationAssessment.service';
import { RotationAssessmentDeleteUI } from '../delete/rotationAssessment.delete';
import { RotationAssessmentEditUI } from '../edit/rotationAssessment.edit';



@Component({
  selector: 'lad-rotationAssessment-master',
  templateUrl: './rotationAssessment.master.html',
  styleUrls: ['./rotationAssessment.master.css'],
  providers: [
    RotationAssessmentService,
    
  ]
})
export class RotationAssessmentMasterUI extends MasterModal<RotationAssessment> {

  constructor(private rotationAssessmentService: RotationAssessmentService) {
    super(rotationAssessmentService);
  }
}