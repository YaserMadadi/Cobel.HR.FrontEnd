import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Year } from '../year';


@Component({
  selector: 'base-year-seek',
  templateUrl: './year.seek.html',
  styleUrls: ['./year.seek.css']
})
export class YearSeekUI extends SeekModal<Year> {

  year: Year = new Year();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.year);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}