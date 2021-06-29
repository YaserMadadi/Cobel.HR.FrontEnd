import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentTrainingService } from './assessmentTraining.service';
import { AssessmentTrainingServiceCollection } from './assessmentTraining.service.collection';
import { AssessmentTrainingMasterUI } from './master/assessmentTraining.master';
import { AssessmentTraining_ModuleDetail } from './assessmentTraining.module.detail';

@NgModule({
    declarations: [
        AssessmentTrainingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AssessmentTraining_ModuleDetail
    ],
    exports: [
        AssessmentTrainingMasterUI
    ],
    providers: [
        //AssessmentTrainingService,
       // AssessmentTrainingServiceCollection   
    ]
})

export class AssessmentTraining_ModuleMaster { }