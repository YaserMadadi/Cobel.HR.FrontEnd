import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { YearQuarter } from '../yearQuarter';


@Component({
  selector: 'base-yearQuarter-seek',
  templateUrl: './yearQuarter.seek.html',
  styleUrls: ['./yearQuarter.seek.css']
})
export class YearQuarterSeekUI extends SeekModal<YearQuarter> {

  yearQuarter: YearQuarter = new YearQuarter();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.yearQuarter);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}