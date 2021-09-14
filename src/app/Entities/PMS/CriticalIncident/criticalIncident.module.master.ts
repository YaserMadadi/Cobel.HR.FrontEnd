import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentService } from './criticalIncident.service';
import { CriticalIncidentServiceCollection } from './criticalIncident.service.collection';
import { CriticalIncidentMasterUI } from './master/criticalIncident.master';
import { CriticalIncident_ModuleDetail } from './criticalIncident.module.detail';

@NgModule({
    declarations: [
        CriticalIncidentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CriticalIncident_ModuleDetail
    ],
    exports: [
        CriticalIncidentMasterUI
    ]
})

export class CriticalIncident_ModuleMaster { }