import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Employee } from '../employee';


@Component({
  selector: 'hr-employee-seek',
  templateUrl: './employee.seek.html',
  styleUrls: ['./employee.seek.css']
})
export class EmployeeSeekUI extends SeekModal<Employee> {

  employee: Employee = new Employee();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.employee);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}