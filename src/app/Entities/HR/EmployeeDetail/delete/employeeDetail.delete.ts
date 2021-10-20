import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EmployeeDetail } from '../employeeDetail';
import { EmployeeDetailService } from '../employeeDetail.service';


@Component({
  selector: 'hr-employeeDetail-delete',
  templateUrl: './employeeDetail.delete.html',
  styleUrls: ['./employeeDetail.delete.css'],
  
})
export class EmployeeDetailDeleteUI extends DeleteModal<EmployeeDetail> {

    constructor(private employeeDetailService: EmployeeDetailService){
        super(employeeDetailService);
    }

}