import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Assessment } from '../assessment';


@Component({
  selector: 'lad-assessment-seek',
  templateUrl: './assessment.seek.html',
  styleUrls: ['./assessment.seek.css']
})
export class AssessmentSeekUI extends SeekModal<Assessment> {

  assessment: Assessment = new Assessment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessment);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}