import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EmployeeEventService } from './employeeEvent.service';
import { EmployeeEventServiceCollection } from './employeeEvent.service.collection';
import { EmployeeEventMasterUI } from './master/employeeEvent.master';
import { EmployeeEventEditUI } from './edit/employeeEvent.edit';
import { EmployeeEventDeleteUI } from './delete/employeeEvent.delete';
import { EmployeeEventSeekUI } from './seek/employeeEvent.seek';

import { Employee_ModuleFunc } from '../Employee/employee.module.func';
import { EventType_ModuleFunc } from '../../Base.HR/EventType/eventType.module.func';

@NgModule({
    declarations: [
        EmployeeEventEditUI,
		EmployeeEventDeleteUI,
		EmployeeEventSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		EventType_ModuleFunc
    ],
    exports: [
        EmployeeEventEditUI,
		EmployeeEventDeleteUI,
		EmployeeEventSeekUI
    ],
    providers: [
       //EmployeeEventService,
       // EmployeeEventServiceCollection,
    ]
})

export class EmployeeEvent_ModuleFunc { }