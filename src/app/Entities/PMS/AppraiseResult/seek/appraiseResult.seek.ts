import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AppraiseResult } from '../appraiseResult';


@Component({
  selector: 'pms-appraiseResult-seek',
  templateUrl: './appraiseResult.seek.html',
  styleUrls: ['./appraiseResult.seek.css']
})
export class AppraiseResultSeekUI extends SeekModal<AppraiseResult> {

  appraiseResult: AppraiseResult = new AppraiseResult();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.appraiseResult);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}