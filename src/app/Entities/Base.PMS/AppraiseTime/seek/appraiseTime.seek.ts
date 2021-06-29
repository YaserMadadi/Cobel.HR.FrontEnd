import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AppraiseTime } from '../appraiseTime';


@Component({
  selector: 'base-pms-appraiseTime-seek',
  templateUrl: './appraiseTime.seek.html',
  styleUrls: ['./appraiseTime.seek.css']
})
export class AppraiseTimeSeekUI extends SeekModal<AppraiseTime> {

  appraiseTime: AppraiseTime = new AppraiseTime();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.appraiseTime);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}