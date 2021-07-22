import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { NonOperationalAppraise } from '../nonOperationalAppraise';


@Component({
  selector: 'pms-nonOperationalAppraise-seek',
  templateUrl: './nonOperationalAppraise.seek.html',
  styleUrls: ['./nonOperationalAppraise.seek.css']
})
export class NonOperationalAppraiseSeekUI extends SeekModal<NonOperationalAppraise> {

  nonOperationalAppraise: NonOperationalAppraise = new NonOperationalAppraise();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.nonOperationalAppraise);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}