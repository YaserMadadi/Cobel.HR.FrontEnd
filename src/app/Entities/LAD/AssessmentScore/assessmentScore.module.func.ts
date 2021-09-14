import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessmentScoreService } from './assessmentScore.service';
import { AssessmentScoreServiceCollection } from './assessmentScore.service.collection';
import { AssessmentScoreMasterUI } from './master/assessmentScore.master';
import { AssessmentScoreEditUI } from './edit/assessmentScore.edit';
import { AssessmentScoreDeleteUI } from './delete/assessmentScore.delete';
import { AssessmentScoreSeekUI } from './seek/assessmentScore.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { CompetencyItem_ModuleFunc } from '../../PMS/CompetencyItem/competencyItem.module.func';

@NgModule({
    declarations: [
        AssessmentScoreEditUI,
		AssessmentScoreDeleteUI,
		AssessmentScoreSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		CompetencyItem_ModuleFunc
    ],
    exports: [
        AssessmentScoreEditUI,
		AssessmentScoreDeleteUI,
		AssessmentScoreSeekUI
    ]
})

export class AssessmentScore_ModuleFunc { }