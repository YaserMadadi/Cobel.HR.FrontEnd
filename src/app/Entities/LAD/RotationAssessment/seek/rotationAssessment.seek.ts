import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { RotationAssessment } from '../rotationAssessment';


@Component({
  selector: 'lad-rotationAssessment-seek',
  templateUrl: './rotationAssessment.seek.html',
  styleUrls: ['./rotationAssessment.seek.css']
})
export class RotationAssessmentSeekUI extends SeekModal<RotationAssessment> {

  rotationAssessment: RotationAssessment = new RotationAssessment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.rotationAssessment);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}