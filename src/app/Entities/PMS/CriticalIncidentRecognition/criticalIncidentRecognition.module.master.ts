import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CriticalIncidentRecognitionService } from './criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionServiceCollection } from './criticalIncidentRecognition.service.collection';
import { CriticalIncidentRecognitionMasterUI } from './master/criticalIncidentRecognition.master';
import { CriticalIncidentRecognition_ModuleDetail } from './criticalIncidentRecognition.module.detail';

@NgModule({
    declarations: [
        CriticalIncidentRecognitionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CriticalIncidentRecognition_ModuleDetail
    ],
    exports: [
        CriticalIncidentRecognitionMasterUI
    ],
    providers: [
        //CriticalIncidentRecognitionService,
       // CriticalIncidentRecognitionServiceCollection   
    ]
})

export class CriticalIncidentRecognition_ModuleMaster { }