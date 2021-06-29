import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentTypeService } from './criticalIncidentType.service';
import { CriticalIncidentTypeServiceCollection } from './criticalIncidentType.service.collection';
import { CriticalIncidentTypeMasterUI } from './master/criticalIncidentType.master';
import { CriticalIncidentType_ModuleDetail } from './criticalIncidentType.module.detail';

@NgModule({
    declarations: [
        CriticalIncidentTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CriticalIncidentType_ModuleDetail
    ],
    exports: [
        CriticalIncidentTypeMasterUI
    ],
    providers: [
        //CriticalIncidentTypeService,
       // CriticalIncidentTypeServiceCollection   
    ]
})

export class CriticalIncidentType_ModuleMaster { }