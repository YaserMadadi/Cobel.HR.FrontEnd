import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeEventService } from './employeeEvent.service';
import { EmployeeEventServiceCollection } from './employeeEvent.service.collection';
import { EmployeeEventMasterUI } from './master/employeeEvent.master';
import { EmployeeEvent_ModuleDetail } from './employeeEvent.module.detail';

@NgModule({
    declarations: [
        EmployeeEventMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EmployeeEvent_ModuleDetail
    ],
    exports: [
        EmployeeEventMasterUI
    ],
    providers: [
        //EmployeeEventService,
       // EmployeeEventServiceCollection   
    ]
})

export class EmployeeEvent_ModuleMaster { }