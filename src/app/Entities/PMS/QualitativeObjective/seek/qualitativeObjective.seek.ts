import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QualitativeObjective } from '../qualitativeObjective';


@Component({
  selector: 'pms-qualitativeObjective-seek',
  templateUrl: './qualitativeObjective.seek.html',
  styleUrls: ['./qualitativeObjective.seek.css']
})
export class QualitativeObjectiveSeekUI extends SeekModal<QualitativeObjective> {

  qualitativeObjective: QualitativeObjective = new QualitativeObjective();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.qualitativeObjective);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}