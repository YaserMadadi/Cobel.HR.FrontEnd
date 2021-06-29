import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CriticalIncidentTypeService } from './criticalIncidentType.service';
import { CriticalIncidentTypeServiceCollection } from './criticalIncidentType.service.collection';
import { CriticalIncidentTypeMasterUI } from './master/criticalIncidentType.master';
import { CriticalIncidentTypeEditUI } from './edit/criticalIncidentType.edit';
import { CriticalIncidentTypeDeleteUI } from './delete/criticalIncidentType.delete';
import { CriticalIncidentTypeSeekUI } from './seek/criticalIncidentType.seek';


@NgModule({
    declarations: [
        CriticalIncidentTypeEditUI,
		CriticalIncidentTypeDeleteUI,
		CriticalIncidentTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CriticalIncidentTypeEditUI,
		CriticalIncidentTypeDeleteUI,
		CriticalIncidentTypeSeekUI
    ],
    providers: [
       //CriticalIncidentTypeService,
       // CriticalIncidentTypeServiceCollection,
    ]
})

export class CriticalIncidentType_ModuleFunc { }