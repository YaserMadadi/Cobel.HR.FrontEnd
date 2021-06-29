import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EmployeeNotificationService } from './employeeNotification.service';
import { EmployeeNotificationServiceCollection } from './employeeNotification.service.collection';

import { EmployeeNotificationIndexUI } from './index/employeeNotification.index';
import { EmployeeNotification_ModuleFunc } from './employeeNotification.module.func';
import { EmployeeNotification_ModuleMaster } from './employeeNotification.module.master';



@NgModule({
  declarations: [
    EmployeeNotificationIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EmployeeNotification_ModuleMaster,
  ],
  exports: [
    EmployeeNotificationIndexUI,
		EmployeeNotification_ModuleMaster,
  ],
  providers: [
    // EmployeeNotificationService,
    // EmployeeNotificationServiceCollection
  ]
})
export class EmployeeNotificationModule {}