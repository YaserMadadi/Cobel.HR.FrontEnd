import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PositionAssignment } from '../positionAssignment';


@Component({
  selector: 'hr-positionAssignment-seek',
  templateUrl: './positionAssignment.seek.html',
  styleUrls: ['./positionAssignment.seek.css']
})
export class PositionAssignmentSeekUI extends SeekModal<PositionAssignment> {

  positionAssignment: PositionAssignment = new PositionAssignment();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.positionAssignment);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}