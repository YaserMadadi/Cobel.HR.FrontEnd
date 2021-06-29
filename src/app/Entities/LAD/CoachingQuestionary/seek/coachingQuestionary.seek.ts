import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CoachingQuestionary } from '../coachingQuestionary';


@Component({
  selector: 'lad-coachingQuestionary-seek',
  templateUrl: './coachingQuestionary.seek.html',
  styleUrls: ['./coachingQuestionary.seek.css']
})
export class CoachingQuestionarySeekUI extends SeekModal<CoachingQuestionary> {

  coachingQuestionary: CoachingQuestionary = new CoachingQuestionary();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coachingQuestionary);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}