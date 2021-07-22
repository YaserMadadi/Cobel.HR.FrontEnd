import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Coach } from '../coach';


@Component({
  selector: 'lad-coach-seek',
  templateUrl: './coach.seek.html',
  styleUrls: ['./coach.seek.css']
})
export class CoachSeekUI extends SeekModal<Coach> {

  coach: Coach = new Coach();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coach);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}