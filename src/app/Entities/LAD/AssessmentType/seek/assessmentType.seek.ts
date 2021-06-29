import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AssessmentType } from '../assessmentType';


@Component({
  selector: 'lad-assessmentType-seek',
  templateUrl: './assessmentType.seek.html',
  styleUrls: ['./assessmentType.seek.css']
})
export class AssessmentTypeSeekUI extends SeekModal<AssessmentType> {

  assessmentType: AssessmentType = new AssessmentType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessmentType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}