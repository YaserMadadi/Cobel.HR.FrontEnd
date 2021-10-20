import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentScoreService } from './assessmentScore.service';
import { AssessmentScoreServiceCollection } from './assessmentScore.service.collection';
import { AssessmentScoreMasterUI } from './master/assessmentScore.master';
import { AssessmentScore_ModuleDetail } from './assessmentScore.module.detail';

@NgModule({
    declarations: [
        AssessmentScoreMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AssessmentScore_ModuleDetail
    ],
    exports: [
        AssessmentScoreMasterUI
    ]
})

export class AssessmentScore_ModuleMaster { }