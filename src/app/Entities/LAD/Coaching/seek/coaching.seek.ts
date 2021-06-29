import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Coaching } from '../coaching';


@Component({
  selector: 'lad-coaching-seek',
  templateUrl: './coaching.seek.html',
  styleUrls: ['./coaching.seek.css']
})
export class CoachingSeekUI extends SeekModal<Coaching> {

  coaching: Coaching = new Coaching();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coaching);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}