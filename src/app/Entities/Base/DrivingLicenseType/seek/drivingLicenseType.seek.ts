import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { DrivingLicenseType } from '../drivingLicenseType';


@Component({
  selector: 'base-drivingLicenseType-seek',
  templateUrl: './drivingLicenseType.seek.html',
  styleUrls: ['./drivingLicenseType.seek.css']
})
export class DrivingLicenseTypeSeekUI extends SeekModal<DrivingLicenseType> {

  drivingLicenseType: DrivingLicenseType = new DrivingLicenseType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.drivingLicenseType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}