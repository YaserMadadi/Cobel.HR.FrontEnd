import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CriticalIncidentService } from './criticalIncident.service';
import { CriticalIncidentServiceCollection } from './criticalIncident.service.collection';
import { CriticalIncidentMasterUI } from './master/criticalIncident.master';
import { CriticalIncidentEditUI } from './edit/criticalIncident.edit';
import { CriticalIncidentDeleteUI } from './delete/criticalIncident.delete';
import { CriticalIncidentSeekUI } from './seek/criticalIncident.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { CriticalIncidentType_ModuleFunc } from '../CriticalIncidentType/criticalIncidentType.module.func';

@NgModule({
    declarations: [
        CriticalIncidentEditUI,
		CriticalIncidentDeleteUI,
		CriticalIncidentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		CriticalIncidentType_ModuleFunc
    ],
    exports: [
        CriticalIncidentEditUI,
		CriticalIncidentDeleteUI,
		CriticalIncidentSeekUI
    ]
})

export class CriticalIncident_ModuleFunc { }