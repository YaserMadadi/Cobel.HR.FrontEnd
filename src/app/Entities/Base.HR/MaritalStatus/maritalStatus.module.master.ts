import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MaritalStatusService } from './maritalStatus.service';
import { MaritalStatusServiceCollection } from './maritalStatus.service.collection';
import { MaritalStatusMasterUI } from './master/maritalStatus.master';
import { MaritalStatus_ModuleDetail } from './maritalStatus.module.detail';

@NgModule({
    declarations: [
        MaritalStatusMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MaritalStatus_ModuleDetail
    ],
    exports: [
        MaritalStatusMasterUI
    ],
    providers: [
        //MaritalStatusService,
       // MaritalStatusServiceCollection   
    ]
})

export class MaritalStatus_ModuleMaster { }