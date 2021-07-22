import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { QualitativeAppraise } from '../qualitativeAppraise';


@Component({
  selector: 'pms-qualitativeAppraise-seek',
  templateUrl: './qualitativeAppraise.seek.html',
  styleUrls: ['./qualitativeAppraise.seek.css']
})
export class QualitativeAppraiseSeekUI extends SeekModal<QualitativeAppraise> {

  qualitativeAppraise: QualitativeAppraise = new QualitativeAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.qualitativeAppraise);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}