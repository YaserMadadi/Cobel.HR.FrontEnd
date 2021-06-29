import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QualitativeKPI } from '../qualitativeKPI';


@Component({
  selector: 'pms-qualitativeKPI-seek',
  templateUrl: './qualitativeKPI.seek.html',
  styleUrls: ['./qualitativeKPI.seek.css']
})
export class QualitativeKPISeekUI extends SeekModal<QualitativeKPI> {

  qualitativeKPI: QualitativeKPI = new QualitativeKPI();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.qualitativeKPI);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}