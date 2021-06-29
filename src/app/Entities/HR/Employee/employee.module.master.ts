import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeService } from './employee.service';
import { EmployeeServiceCollection } from './employee.service.collection';
import { EmployeeMasterUI } from './master/employee.master';
import { Employee_ModuleDetail } from './employee.module.detail';

@NgModule({
    declarations: [
        EmployeeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Employee_ModuleDetail
    ],
    exports: [
        EmployeeMasterUI
    ],
    providers: [
        //EmployeeService,
       // EmployeeServiceCollection   
    ]
})

export class Employee_ModuleMaster { }