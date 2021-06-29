import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { DepartmentDeleteUI } from '../delete/department.delete';
import { DepartmentEditUI } from '../edit/department.edit';
import { UnitService } from '../../Unit/unit.service';



@Component({
  selector: 'hr-department-master',
  templateUrl: './department.master.html',
  styleUrls: ['./department.master.css'],
  providers: [
    DepartmentService,
    UnitService,
  ]
})
export class DepartmentMasterUI extends MasterModal<Department> {

  constructor(private departmentService: DepartmentService) {
    super(departmentService);
  }
}