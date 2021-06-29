import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Quarter } from '../quarter';


@Component({
  selector: 'base-quarter-seek',
  templateUrl: './quarter.seek.html',
  styleUrls: ['./quarter.seek.css']
})
export class QuarterSeekUI extends SeekModal<Quarter> {

  quarter: Quarter = new Quarter();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.quarter);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}