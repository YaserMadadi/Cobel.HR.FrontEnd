import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessmentTrainingService } from './assessmentTraining.service';
import { AssessmentTrainingServiceCollection } from './assessmentTraining.service.collection';
import { AssessmentTrainingMasterUI } from './master/assessmentTraining.master';
import { AssessmentTrainingEditUI } from './edit/assessmentTraining.edit';
import { AssessmentTrainingDeleteUI } from './delete/assessmentTraining.delete';
import { AssessmentTrainingSeekUI } from './seek/assessmentTraining.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { YearQuarter_ModuleFunc } from '../../Base/YearQuarter/yearQuarter.module.func';

@NgModule({
    declarations: [
        AssessmentTrainingEditUI,
		AssessmentTrainingDeleteUI,
		AssessmentTrainingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		YearQuarter_ModuleFunc
    ],
    exports: [
        AssessmentTrainingEditUI,
		AssessmentTrainingDeleteUI,
		AssessmentTrainingSeekUI
    ]
})

export class AssessmentTraining_ModuleFunc { }