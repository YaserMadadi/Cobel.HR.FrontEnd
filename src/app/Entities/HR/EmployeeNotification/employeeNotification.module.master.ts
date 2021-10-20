import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeNotificationService } from './employeeNotification.service';
import { EmployeeNotificationServiceCollection } from './employeeNotification.service.collection';
import { EmployeeNotificationMasterUI } from './master/employeeNotification.master';
import { EmployeeNotification_ModuleDetail } from './employeeNotification.module.detail';

@NgModule({
    declarations: [
        EmployeeNotificationMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EmployeeNotification_ModuleDetail
    ],
    exports: [
        EmployeeNotificationMasterUI
    ]
})

export class EmployeeNotification_ModuleMaster { }