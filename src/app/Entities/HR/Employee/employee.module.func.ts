import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EmployeeService } from './employee.service';
import { EmployeeServiceCollection } from './employee.service.collection';
import { EmployeeMasterUI } from './master/employee.master';
import { EmployeeEditUI } from './edit/employee.edit';
import { EmployeeDeleteUI } from './delete/employee.delete';
import { EmployeeSeekUI } from './seek/employee.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { HoldingSection_ModuleFunc } from '../../Base/HoldingSection/holdingSection.module.func';
import { EmploymentStatus_ModuleFunc } from '../../Base.HR/EmploymentStatus/employmentStatus.module.func';

@NgModule({
    declarations: [
        EmployeeEditUI,
		EmployeeDeleteUI,
		EmployeeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		HoldingSection_ModuleFunc,
		EmploymentStatus_ModuleFunc
    ],
    exports: [
        EmployeeEditUI,
		EmployeeDeleteUI,
		EmployeeSeekUI
    ],
    providers: [
       //EmployeeService,
       // EmployeeServiceCollection,
    ]
})

export class Employee_ModuleFunc { }