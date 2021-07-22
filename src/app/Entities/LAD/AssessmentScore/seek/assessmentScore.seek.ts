import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AssessmentScore } from '../assessmentScore';


@Component({
  selector: 'lad-assessmentScore-seek',
  templateUrl: './assessmentScore.seek.html',
  styleUrls: ['./assessmentScore.seek.css']
})
export class AssessmentScoreSeekUI extends SeekModal<AssessmentScore> {

  assessmentScore: AssessmentScore = new AssessmentScore();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.assessmentScore);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}