import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EmploymentStatus } from '../employmentStatus';
import { EmploymentStatusService } from '../employmentStatus.service';
import { EmploymentStatusDeleteUI } from '../delete/employmentStatus.delete';
import { EmploymentStatusEditUI } from '../edit/employmentStatus.edit';
import { EmployeeService } from '../../../HR/Employee/employee.service';
import { EmployeeDetailService } from '../../../HR/EmployeeDetail/employeeDetail.service';



@Component({
  selector: 'base-hr-employmentStatus-master',
  templateUrl: './employmentStatus.master.html',
  styleUrls: ['./employmentStatus.master.css']
})
export class EmploymentStatusMasterUI extends MasterModal<EmploymentStatus> {

  constructor(private employmentStatusService: EmploymentStatusService) {
    super(employmentStatusService);
  }
}
