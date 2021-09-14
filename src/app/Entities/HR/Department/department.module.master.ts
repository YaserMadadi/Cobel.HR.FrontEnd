import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DepartmentService } from './department.service';
import { DepartmentServiceCollection } from './department.service.collection';
import { DepartmentMasterUI } from './master/department.master';
import { Department_ModuleDetail } from './department.module.detail';

@NgModule({
    declarations: [
        DepartmentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Department_ModuleDetail
    ],
    exports: [
        DepartmentMasterUI
    ]
})

export class Department_ModuleMaster { }