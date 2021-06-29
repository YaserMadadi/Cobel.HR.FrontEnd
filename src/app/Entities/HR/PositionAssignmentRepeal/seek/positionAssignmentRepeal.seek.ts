import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PositionAssignmentRepeal } from '../positionAssignmentRepeal';


@Component({
  selector: 'hr-positionAssignmentRepeal-seek',
  templateUrl: './positionAssignmentRepeal.seek.html',
  styleUrls: ['./positionAssignmentRepeal.seek.css']
})
export class PositionAssignmentRepealSeekUI extends SeekModal<PositionAssignmentRepeal> {

  positionAssignmentRepeal: PositionAssignmentRepeal = new PositionAssignmentRepeal();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.positionAssignmentRepeal);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}