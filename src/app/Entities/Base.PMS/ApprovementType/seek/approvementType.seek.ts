import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ApprovementType } from '../approvementType';


@Component({
  selector: 'base-pms-approvementType-seek',
  templateUrl: './approvementType.seek.html',
  styleUrls: ['./approvementType.seek.css']
})
export class ApprovementTypeSeekUI extends SeekModal<ApprovementType> {

  approvementType: ApprovementType = new ApprovementType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.approvementType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}