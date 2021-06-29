import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { HealthStatusService } from './healthStatus.service';
import { HealthStatusServiceCollection } from './healthStatus.service.collection';
import { HealthStatusMasterUI } from './master/healthStatus.master';
import { HealthStatusEditUI } from './edit/healthStatus.edit';
import { HealthStatusDeleteUI } from './delete/healthStatus.delete';
import { HealthStatusSeekUI } from './seek/healthStatus.seek';


@NgModule({
    declarations: [
        HealthStatusEditUI,
		HealthStatusDeleteUI,
		HealthStatusSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        HealthStatusEditUI,
		HealthStatusDeleteUI,
		HealthStatusSeekUI
    ],
    providers: [
       //HealthStatusService,
       // HealthStatusServiceCollection,
    ]
})

export class HealthStatus_ModuleFunc { }