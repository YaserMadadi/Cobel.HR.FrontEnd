import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EmployeeEvent } from '../employeeEvent';


@Component({
  selector: 'hr-employeeEvent-seek',
  templateUrl: './employeeEvent.seek.html',
  styleUrls: ['./employeeEvent.seek.css']
})
export class EmployeeEventSeekUI extends SeekModal<EmployeeEvent> {

  employeeEvent: EmployeeEvent = new EmployeeEvent();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.employeeEvent);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}