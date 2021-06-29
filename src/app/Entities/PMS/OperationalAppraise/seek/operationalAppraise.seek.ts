import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { OperationalAppraise } from '../operationalAppraise';


@Component({
  selector: 'pms-operationalAppraise-seek',
  templateUrl: './operationalAppraise.seek.html',
  styleUrls: ['./operationalAppraise.seek.css']
})
export class OperationalAppraiseSeekUI extends SeekModal<OperationalAppraise> {

  operationalAppraise: OperationalAppraise = new OperationalAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.operationalAppraise);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}