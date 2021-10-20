import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { HealthStatus } from '../healthStatus';


@Component({
  selector: 'base-healthStatus-seek',
  templateUrl: './healthStatus.seek.html',
  styleUrls: ['./healthStatus.seek.css']
})
export class HealthStatusSeekUI extends SeekModal<HealthStatus> {

  healthStatus: HealthStatus = new HealthStatus();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.healthStatus);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}