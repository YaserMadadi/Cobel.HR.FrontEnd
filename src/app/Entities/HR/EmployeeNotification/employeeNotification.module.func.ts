import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EmployeeNotificationService } from './employeeNotification.service';
import { EmployeeNotificationServiceCollection } from './employeeNotification.service.collection';
import { EmployeeNotificationMasterUI } from './master/employeeNotification.master';
import { EmployeeNotificationEditUI } from './edit/employeeNotification.edit';
import { EmployeeNotificationDeleteUI } from './delete/employeeNotification.delete';
import { EmployeeNotificationSeekUI } from './seek/employeeNotification.seek';

import { Employee_ModuleFunc } from '../Employee/employee.module.func';

@NgModule({
    declarations: [
        EmployeeNotificationEditUI,
		EmployeeNotificationDeleteUI,
		EmployeeNotificationSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc
    ],
    exports: [
        EmployeeNotificationEditUI,
		EmployeeNotificationDeleteUI,
		EmployeeNotificationSeekUI
    ]
})

export class EmployeeNotification_ModuleFunc { }