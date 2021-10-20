
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EmploymentStatus } from '../employmentStatus';


@Component({
  selector: 'base-hr-employmentStatus-seek',
  templateUrl: './employmentStatus.seek.html',
  styleUrls: ['./employmentStatus.seek.css']
})
export class EmploymentStatusSeekUI extends SeekModal<EmploymentStatus> {

  employmentStatus: EmploymentStatus = new EmploymentStatus();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.employmentStatus);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
