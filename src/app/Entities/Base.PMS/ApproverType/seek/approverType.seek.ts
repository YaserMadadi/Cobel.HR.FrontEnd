import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ApproverType } from '../approverType';


@Component({
  selector: 'base-pms-approverType-seek',
  templateUrl: './approverType.seek.html',
  styleUrls: ['./approverType.seek.css']
})
export class ApproverTypeSeekUI extends SeekModal<ApproverType> {

  approverType: ApproverType = new ApproverType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.approverType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}