import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HoldingSectionService } from './holdingSection.service';
import { HoldingSectionServiceCollection } from './holdingSection.service.collection';


import { LastHoldingSection_Employee_DetailUI } from './detail/lastHoldingSection-employee.detail';
import { Employee_ModuleMaster } from '../../HR/Employee/employee.module.master';
import { HoldingSection_EmployeeDetail_DetailUI } from './detail/holdingSection-employeeDetail.detail';
import { EmployeeDetail_ModuleMaster } from '../../HR/EmployeeDetail/employeeDetail.module.master';

@NgModule({
  declarations: [
    LastHoldingSection_Employee_DetailUI,
		HoldingSection_EmployeeDetail_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Employee_ModuleMaster,
		EmployeeDetail_ModuleMaster,
  ],
  exports: [
    LastHoldingSection_Employee_DetailUI,
		HoldingSection_EmployeeDetail_DetailUI
  ],
  providers: [
    //HoldingSectionService,
    //HoldingSectionServiceCollection
  ]
})
export class HoldingSection_ModuleDetail { }