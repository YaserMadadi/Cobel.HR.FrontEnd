import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MilitaryServiceStatus } from '../militaryServiceStatus';


@Component({
  selector: 'base-militaryServiceStatus-seek',
  templateUrl: './militaryServiceStatus.seek.html',
  styleUrls: ['./militaryServiceStatus.seek.css']
})
export class MilitaryServiceStatusSeekUI extends SeekModal<MilitaryServiceStatus> {

  militaryServiceStatus: MilitaryServiceStatus = new MilitaryServiceStatus();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.militaryServiceStatus);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}