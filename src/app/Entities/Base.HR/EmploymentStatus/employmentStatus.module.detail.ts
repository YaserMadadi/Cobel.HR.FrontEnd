
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmploymentStatusService } from './employmentStatus.service';
import { EmploymentStatusServiceCollection } from './employmentStatus.service.collection';


import { EmploymentStatus_Employee_DetailUI } from './detail/employmentStatus-employee.detail';
import { Employee_ModuleMaster } from '../../HR/Employee/employee.module.master';
import { EmploymentStatus_EmployeeDetail_DetailUI } from './detail/employmentStatus-employeeDetail.detail';
import { EmployeeDetail_ModuleMaster } from '../../HR/EmployeeDetail/employeeDetail.module.master';

@NgModule({
  declarations: [
    EmploymentStatus_Employee_DetailUI,
		EmploymentStatus_EmployeeDetail_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Employee_ModuleMaster,
		EmployeeDetail_ModuleMaster,
  ],
  exports: [
    EmploymentStatus_Employee_DetailUI,
		EmploymentStatus_EmployeeDetail_DetailUI
  ]
})
export class EmploymentStatus_ModuleDetail { }