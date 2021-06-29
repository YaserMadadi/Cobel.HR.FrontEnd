import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MeasurementUnit } from '../measurementUnit';


@Component({
  selector: 'base-pms-measurementUnit-seek',
  templateUrl: './measurementUnit.seek.html',
  styleUrls: ['./measurementUnit.seek.css']
})
export class MeasurementUnitSeekUI extends SeekModal<MeasurementUnit> {

  measurementUnit: MeasurementUnit = new MeasurementUnit();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.measurementUnit);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}