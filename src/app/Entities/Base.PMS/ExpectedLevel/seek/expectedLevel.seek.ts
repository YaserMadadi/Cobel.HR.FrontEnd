import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ExpectedLevel } from '../expectedLevel';


@Component({
  selector: 'base-pms-expectedLevel-seek',
  templateUrl: './expectedLevel.seek.html',
  styleUrls: ['./expectedLevel.seek.css']
})
export class ExpectedLevelSeekUI extends SeekModal<ExpectedLevel> {

  expectedLevel: ExpectedLevel = new ExpectedLevel();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.expectedLevel);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}