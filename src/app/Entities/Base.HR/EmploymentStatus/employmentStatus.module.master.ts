import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EmploymentStatusService } from './employmentStatus.service';
import { EmploymentStatusServiceCollection } from './employmentStatus.service.collection';
import { EmploymentStatusMasterUI } from './master/employmentStatus.master';
import { EmploymentStatus_ModuleDetail } from './employmentStatus.module.detail';

@NgModule({
    declarations: [
        EmploymentStatusMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EmploymentStatus_ModuleDetail
    ],
    exports: [
        EmploymentStatusMasterUI
    ],
    providers: [
        //EmploymentStatusService,
       // EmploymentStatusServiceCollection   
    ]
})

export class EmploymentStatus_ModuleMaster { }