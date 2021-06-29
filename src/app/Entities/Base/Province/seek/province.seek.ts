import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Province } from '../province';


@Component({
  selector: 'base-province-seek',
  templateUrl: './province.seek.html',
  styleUrls: ['./province.seek.css']
})
export class ProvinceSeekUI extends SeekModal<Province> {

  province: Province = new Province();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.province);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}