import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EmploymentStatusService } from './employmentStatus.service';
import { EmploymentStatusServiceCollection } from './employmentStatus.service.collection';
import { EmploymentStatusMasterUI } from './master/employmentStatus.master';
import { EmploymentStatusEditUI } from './edit/employmentStatus.edit';
import { EmploymentStatusDeleteUI } from './delete/employmentStatus.delete';
import { EmploymentStatusSeekUI } from './seek/employmentStatus.seek';


@NgModule({
    declarations: [
        EmploymentStatusEditUI,
		EmploymentStatusDeleteUI,
		EmploymentStatusSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        EmploymentStatusEditUI,
		EmploymentStatusDeleteUI,
		EmploymentStatusSeekUI
    ],
    providers: [
       //EmploymentStatusService,
       // EmploymentStatusServiceCollection,
    ]
})

export class EmploymentStatus_ModuleFunc { }