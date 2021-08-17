
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EmploymentStatusService } from './employmentStatus.service';
import { EmploymentStatusServiceCollection } from './employmentStatus.service.collection';

import { EmploymentStatusIndexUI } from './index/employmentStatus.index';
import { EmploymentStatus_ModuleFunc } from './employmentStatus.module.func';
import { EmploymentStatus_ModuleMaster } from './employmentStatus.module.master';


import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Employee_ModuleMaster } from '../../HR/Employee/employee.module.master';
import { EmployeeDetail_ModuleFunc } from '../../HR/EmployeeDetail/employeeDetail.module.func';
import { EmployeeDetail_ModuleMaster } from '../../HR/EmployeeDetail/employeeDetail.module.master';

@NgModule({
  declarations: [
    EmploymentStatusIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EmploymentStatus_ModuleMaster,
		Employee_ModuleMaster,
		EmployeeDetail_ModuleMaster,
  ],
  exports: [
    EmploymentStatusIndexUI,
		EmploymentStatus_ModuleMaster,
  ],
  providers: [
    // EmploymentStatusService,
    // EmploymentStatusServiceCollection
  ]
})
export class EmploymentStatusModule {}