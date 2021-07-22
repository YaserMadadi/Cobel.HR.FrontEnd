import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Position } from '../position';


@Component({
  selector: 'hr-position-seek',
  templateUrl: './position.seek.html',
  styleUrls: ['./position.seek.css']
})
export class PositionSeekUI extends SeekModal<Position> {

  position: Position = new Position();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.position);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}