import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmployeeDetailService } from './employeeDetail.service';
import { EmployeeDetailServiceCollection } from './employeeDetail.service.collection';
import { EmployeeDetailMasterUI } from './master/employeeDetail.master';
import { EmployeeDetail_ModuleDetail } from './employeeDetail.module.detail';

@NgModule({
    declarations: [
        EmployeeDetailMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EmployeeDetail_ModuleDetail
    ],
    exports: [
        EmployeeDetailMasterUI
    ]
})

export class EmployeeDetail_ModuleMaster { }