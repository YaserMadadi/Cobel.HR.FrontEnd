import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { FinalAppraise } from '../finalAppraise';


@Component({
  selector: 'pms-finalAppraise-seek',
  templateUrl: './finalAppraise.seek.html',
  styleUrls: ['./finalAppraise.seek.css']
})
export class FinalAppraiseSeekUI extends SeekModal<FinalAppraise> {

  finalAppraise: FinalAppraise = new FinalAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.finalAppraise);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}