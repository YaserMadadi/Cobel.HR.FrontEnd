import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QualitativeObjectiveService } from './qualitativeObjective.service';
import { QualitativeObjectiveServiceCollection } from './qualitativeObjective.service.collection';
import { QualitativeObjectiveMasterUI } from './master/qualitativeObjective.master';
import { QualitativeObjective_ModuleDetail } from './qualitativeObjective.module.detail';

@NgModule({
    declarations: [
        QualitativeObjectiveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QualitativeObjective_ModuleDetail
    ],
    exports: [
        QualitativeObjectiveMasterUI
    ],
    providers: [
        //QualitativeObjectiveService,
       // QualitativeObjectiveServiceCollection   
    ]
})

export class QualitativeObjective_ModuleMaster { }