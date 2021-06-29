import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EmployeeDetailService } from './employeeDetail.service';
import { EmployeeDetailServiceCollection } from './employeeDetail.service.collection';
import { EmployeeDetailMasterUI } from './master/employeeDetail.master';
import { EmployeeDetailEditUI } from './edit/employeeDetail.edit';
import { EmployeeDetailDeleteUI } from './delete/employeeDetail.delete';
import { EmployeeDetailSeekUI } from './seek/employeeDetail.seek';

import { Employee_ModuleFunc } from '../Employee/employee.module.func';
import { HoldingSection_ModuleFunc } from '../../Base/HoldingSection/holdingSection.module.func';
import { EmploymentStatus_ModuleFunc } from '../../Base.HR/EmploymentStatus/employmentStatus.module.func';

@NgModule({
    declarations: [
        EmployeeDetailEditUI,
		EmployeeDetailDeleteUI,
		EmployeeDetailSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		HoldingSection_ModuleFunc,
		EmploymentStatus_ModuleFunc
    ],
    exports: [
        EmployeeDetailEditUI,
		EmployeeDetailDeleteUI,
		EmployeeDetailSeekUI
    ],
    providers: [
       //EmployeeDetailService,
       // EmployeeDetailServiceCollection,
    ]
})

export class EmployeeDetail_ModuleFunc { }