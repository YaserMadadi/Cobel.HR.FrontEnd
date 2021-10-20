import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EmployeeEventService } from './employeeEvent.service';
import { EmployeeEventServiceCollection } from './employeeEvent.service.collection';

import { EmployeeEventIndexUI } from './index/employeeEvent.index';
import { EmployeeEvent_ModuleFunc } from './employeeEvent.module.func';
import { EmployeeEvent_ModuleMaster } from './employeeEvent.module.master';



@NgModule({
  declarations: [
    EmployeeEventIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EmployeeEvent_ModuleMaster,
  ],
  exports: [
    EmployeeEventIndexUI,
		EmployeeEvent_ModuleMaster,
   ]
})
export class EmployeeEventModule {}