import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MaritalInfo } from '../maritalInfo';


@Component({
  selector: 'hr-maritalInfo-seek',
  templateUrl: './maritalInfo.seek.html',
  styleUrls: ['./maritalInfo.seek.css']
})
export class MaritalInfoSeekUI extends SeekModal<MaritalInfo> {

  maritalInfo: MaritalInfo = new MaritalInfo();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.maritalInfo);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}