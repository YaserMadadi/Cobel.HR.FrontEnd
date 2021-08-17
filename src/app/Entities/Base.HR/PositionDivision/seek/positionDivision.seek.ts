
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PositionDivision } from '../positionDivision';


@Component({
  selector: 'base-hr-positionDivision-seek',
  templateUrl: './positionDivision.seek.html',
  styleUrls: ['./positionDivision.seek.css']
})
export class PositionDivisionSeekUI extends SeekModal<PositionDivision> {

  positionDivision: PositionDivision = new PositionDivision();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.positionDivision);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
