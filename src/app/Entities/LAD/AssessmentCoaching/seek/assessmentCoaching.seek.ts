import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AssessmentCoaching } from '../assessmentCoaching';


@Component({
  selector: 'lad-assessmentCoaching-seek',
  templateUrl: './assessmentCoaching.seek.html',
  styleUrls: ['./assessmentCoaching.seek.css']
})
export class AssessmentCoachingSeekUI extends SeekModal<AssessmentCoaching> {

  assessmentCoaching: AssessmentCoaching = new AssessmentCoaching();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessmentCoaching);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}