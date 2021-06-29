import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CoachConnectionLine } from '../coachConnectionLine';


@Component({
  selector: 'lad-coachConnectionLine-seek',
  templateUrl: './coachConnectionLine.seek.html',
  styleUrls: ['./coachConnectionLine.seek.css']
})
export class CoachConnectionLineSeekUI extends SeekModal<CoachConnectionLine> {

  coachConnectionLine: CoachConnectionLine = new CoachConnectionLine();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.coachConnectionLine);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}