import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Department } from '../department';


@Component({
  selector: 'hr-department-seek',
  templateUrl: './department.seek.html',
  styleUrls: ['./department.seek.css']
})
export class DepartmentSeekUI extends SeekModal<Department> {

  department: Department = new Department();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.department);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}