import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Department } from '../department';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'hr-department-delete',
  templateUrl: './department.delete.html',
  styleUrls: ['./department.delete.css'],
  providers: [DepartmentService]
})
export class DepartmentDeleteUI extends DeleteModal<Department> {

    constructor(private departmentService: DepartmentService){
        super(departmentService);
    }

}