import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EmployeeNotification } from '../employeeNotification';


@Component({
  selector: 'hr-employeeNotification-seek',
  templateUrl: './employeeNotification.seek.html',
  styleUrls: ['./employeeNotification.seek.css']
})
export class EmployeeNotificationSeekUI extends SeekModal<EmployeeNotification> {

  employeeNotification: EmployeeNotification = new EmployeeNotification();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.employeeNotification);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}