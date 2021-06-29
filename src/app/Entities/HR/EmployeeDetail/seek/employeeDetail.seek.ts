import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { EmployeeDetail } from '../employeeDetail';


@Component({
  selector: 'hr-employeeDetail-seek',
  templateUrl: './employeeDetail.seek.html',
  styleUrls: ['./employeeDetail.seek.css']
})
export class EmployeeDetailSeekUI extends SeekModal<EmployeeDetail> {

  employeeDetail: EmployeeDetail = new EmployeeDetail();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.employeeDetail);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}