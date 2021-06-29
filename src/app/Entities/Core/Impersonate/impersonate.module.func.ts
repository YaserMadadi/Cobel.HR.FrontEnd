import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ImpersonateService } from './impersonate.service';
import { ImpersonateServiceCollection } from './impersonate.service.collection';
import { ImpersonateMasterUI } from './master/impersonate.master';
import { ImpersonateEditUI } from './edit/impersonate.edit';
import { ImpersonateDeleteUI } from './delete/impersonate.delete';
import { ImpersonateSeekUI } from './seek/impersonate.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        ImpersonateEditUI,
		ImpersonateDeleteUI,
		ImpersonateSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc
    ],
    exports: [
        ImpersonateEditUI,
		ImpersonateDeleteUI,
		ImpersonateSeekUI
    ],
    providers: [
       //ImpersonateService,
       // ImpersonateServiceCollection,
    ]
})

export class Impersonate_ModuleFunc { }