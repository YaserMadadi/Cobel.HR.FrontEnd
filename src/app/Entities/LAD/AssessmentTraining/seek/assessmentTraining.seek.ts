import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AssessmentTraining } from '../assessmentTraining';


@Component({
  selector: 'lad-assessmentTraining-seek',
  templateUrl: './assessmentTraining.seek.html',
  styleUrls: ['./assessmentTraining.seek.css']
})
export class AssessmentTrainingSeekUI extends SeekModal<AssessmentTraining> {

  assessmentTraining: AssessmentTraining = new AssessmentTraining();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessmentTraining);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}