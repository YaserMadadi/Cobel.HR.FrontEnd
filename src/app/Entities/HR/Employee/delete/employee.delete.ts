import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'hr-employee-delete',
  templateUrl: './employee.delete.html',
  styleUrls: ['./employee.delete.css'],
  providers: [EmployeeService]
})
export class EmployeeDeleteUI extends DeleteModal<Employee> {

    constructor(private employeeService: EmployeeService){
        super(employeeService);
    }

}