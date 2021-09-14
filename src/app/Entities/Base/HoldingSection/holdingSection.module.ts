import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { HoldingSectionService } from './holdingSection.service';
import { HoldingSectionServiceCollection } from './holdingSection.service.collection';

import { HoldingSectionIndexUI } from './index/holdingSection.index';
import { HoldingSection_ModuleFunc } from './holdingSection.module.func';
import { HoldingSection_ModuleMaster } from './holdingSection.module.master';


import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Employee_ModuleMaster } from '../../HR/Employee/employee.module.master';
import { EmployeeDetail_ModuleFunc } from '../../HR/EmployeeDetail/employeeDetail.module.func';
import { EmployeeDetail_ModuleMaster } from '../../HR/EmployeeDetail/employeeDetail.module.master';

@NgModule({
  declarations: [
    HoldingSectionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    HoldingSection_ModuleMaster,
		Employee_ModuleMaster,
		EmployeeDetail_ModuleMaster,
  ],
  exports: [
    HoldingSectionIndexUI,
		HoldingSection_ModuleMaster,
   ]
})
export class HoldingSectionModule {}