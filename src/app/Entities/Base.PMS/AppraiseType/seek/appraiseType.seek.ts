import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AppraiseType } from '../appraiseType';


@Component({
  selector: 'base-pms-appraiseType-seek',
  templateUrl: './appraiseType.seek.html',
  styleUrls: ['./appraiseType.seek.css']
})
export class AppraiseTypeSeekUI extends SeekModal<AppraiseType> {

  appraiseType: AppraiseType = new AppraiseType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.appraiseType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}