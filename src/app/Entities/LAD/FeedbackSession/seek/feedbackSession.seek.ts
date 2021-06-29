import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FeedbackSession } from '../feedbackSession';


@Component({
  selector: 'lad-feedbackSession-seek',
  templateUrl: './feedbackSession.seek.html',
  styleUrls: ['./feedbackSession.seek.css']
})
export class FeedbackSessionSeekUI extends SeekModal<FeedbackSession> {

  feedbackSession: FeedbackSession = new FeedbackSession();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.feedbackSession);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}