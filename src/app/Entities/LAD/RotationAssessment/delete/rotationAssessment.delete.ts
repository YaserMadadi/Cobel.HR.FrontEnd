import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { RotationAssessment } from '../rotationAssessment';
import { RotationAssessmentService } from '../rotationAssessment.service';


@Component({
  selector: 'lad-rotationAssessment-delete',
  templateUrl: './rotationAssessment.delete.html',
  styleUrls: ['./rotationAssessment.delete.css'],
  
})
export class RotationAssessmentDeleteUI extends DeleteModal<RotationAssessment> {

    constructor(private rotationAssessmentService: RotationAssessmentService){
        super(rotationAssessmentService);
    }

}