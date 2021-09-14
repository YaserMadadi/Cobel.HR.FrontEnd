import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EmployeeDetail } from '../employeeDetail';
import { EmployeeDetailService } from '../employeeDetail.service';
import { EmployeeDetailDeleteUI } from '../delete/employeeDetail.delete';
import { EmployeeDetailEditUI } from '../edit/employeeDetail.edit';



@Component({
  selector: 'hr-employeeDetail-master',
  templateUrl: './employeeDetail.master.html',
  styleUrls: ['./employeeDetail.master.css']
})
export class EmployeeDetailMasterUI extends MasterModal<EmployeeDetail> {

  constructor(private employeeDetailService: EmployeeDetailService) {
    super(employeeDetailService);
  }
}