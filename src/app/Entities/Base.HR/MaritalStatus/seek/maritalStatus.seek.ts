
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MaritalStatus } from '../maritalStatus';


@Component({
  selector: 'base-hr-maritalStatus-seek',
  templateUrl: './maritalStatus.seek.html',
  styleUrls: ['./maritalStatus.seek.css']
})
export class MaritalStatusSeekUI extends SeekModal<MaritalStatus> {

  maritalStatus: MaritalStatus = new MaritalStatus();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.maritalStatus);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
