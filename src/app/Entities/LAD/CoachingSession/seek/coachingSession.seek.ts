import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CoachingSession } from '../coachingSession';


@Component({
  selector: 'lad-coachingSession-seek',
  templateUrl: './coachingSession.seek.html',
  styleUrls: ['./coachingSession.seek.css']
})
export class CoachingSessionSeekUI extends SeekModal<CoachingSession> {

  coachingSession: CoachingSession = new CoachingSession();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coachingSession);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}