import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CoachingQuestionaryDetail } from '../coachingQuestionaryDetail';


@Component({
  selector: 'lad-coachingQuestionaryDetail-seek',
  templateUrl: './coachingQuestionaryDetail.seek.html',
  styleUrls: ['./coachingQuestionaryDetail.seek.css']
})
export class CoachingQuestionaryDetailSeekUI extends SeekModal<CoachingQuestionaryDetail> {

  coachingQuestionaryDetail: CoachingQuestionaryDetail = new CoachingQuestionaryDetail();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coachingQuestionaryDetail);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}