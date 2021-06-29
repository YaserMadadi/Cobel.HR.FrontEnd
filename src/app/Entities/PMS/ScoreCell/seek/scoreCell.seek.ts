import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ScoreCell } from '../scoreCell';


@Component({
  selector: 'pms-scoreCell-seek',
  templateUrl: './scoreCell.seek.html',
  styleUrls: ['./scoreCell.seek.css']
})
export class ScoreCellSeekUI extends SeekModal<ScoreCell> {

  scoreCell: ScoreCell = new ScoreCell();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.scoreCell);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}