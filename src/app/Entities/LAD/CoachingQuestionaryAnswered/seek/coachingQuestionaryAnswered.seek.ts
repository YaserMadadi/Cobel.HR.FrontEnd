import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CoachingQuestionaryAnswered } from '../coachingQuestionaryAnswered';


@Component({
  selector: 'lad-coachingQuestionaryAnswered-seek',
  templateUrl: './coachingQuestionaryAnswered.seek.html',
  styleUrls: ['./coachingQuestionaryAnswered.seek.css']
})
export class CoachingQuestionaryAnsweredSeekUI extends SeekModal<CoachingQuestionaryAnswered> {

  coachingQuestionaryAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coachingQuestionaryAnswered);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}