import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CriticalIncidentRecognitionService } from './criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionServiceCollection } from './criticalIncidentRecognition.service.collection';
import { CriticalIncidentRecognitionMasterUI } from './master/criticalIncidentRecognition.master';
import { CriticalIncidentRecognitionEditUI } from './edit/criticalIncidentRecognition.edit';
import { CriticalIncidentRecognitionDeleteUI } from './delete/criticalIncidentRecognition.delete';
import { CriticalIncidentRecognitionSeekUI } from './seek/criticalIncidentRecognition.seek';

import { CriticalIncident_ModuleFunc } from '../CriticalIncident/criticalIncident.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        CriticalIncidentRecognitionEditUI,
		CriticalIncidentRecognitionDeleteUI,
		CriticalIncidentRecognitionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        CriticalIncident_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        CriticalIncidentRecognitionEditUI,
		CriticalIncidentRecognitionDeleteUI,
		CriticalIncidentRecognitionSeekUI
    ],
    providers: [
       //CriticalIncidentRecognitionService,
       // CriticalIncidentRecognitionServiceCollection,
    ]
})

export class CriticalIncidentRecognition_ModuleFunc { }