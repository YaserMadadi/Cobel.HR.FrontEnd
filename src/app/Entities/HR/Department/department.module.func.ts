import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DepartmentService } from './department.service';
import { DepartmentServiceCollection } from './department.service.collection';
import { DepartmentMasterUI } from './master/department.master';
import { DepartmentEditUI } from './edit/department.edit';
import { DepartmentDeleteUI } from './delete/department.delete';
import { DepartmentSeekUI } from './seek/department.seek';


@NgModule({
    declarations: [
        DepartmentEditUI,
		DepartmentDeleteUI,
		DepartmentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        DepartmentEditUI,
		DepartmentDeleteUI,
		DepartmentSeekUI
    ],
    providers: [
       //DepartmentService,
       // DepartmentServiceCollection,
    ]
})

export class Department_ModuleFunc { }