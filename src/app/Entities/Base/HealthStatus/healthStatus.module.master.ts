import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HealthStatusService } from './healthStatus.service';
import { HealthStatusServiceCollection } from './healthStatus.service.collection';
import { HealthStatusMasterUI } from './master/healthStatus.master';
import { HealthStatus_ModuleDetail } from './healthStatus.module.detail';

@NgModule({
    declarations: [
        HealthStatusMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        HealthStatus_ModuleDetail
    ],
    exports: [
        HealthStatusMasterUI
    ],
    providers: [
        //HealthStatusService,
       // HealthStatusServiceCollection   
    ]
})

export class HealthStatus_ModuleMaster { }