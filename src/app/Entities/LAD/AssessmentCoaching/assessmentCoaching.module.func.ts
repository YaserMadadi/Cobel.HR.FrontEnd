import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessmentCoachingService } from './assessmentCoaching.service';
import { AssessmentCoachingServiceCollection } from './assessmentCoaching.service.collection';
import { AssessmentCoachingMasterUI } from './master/assessmentCoaching.master';
import { AssessmentCoachingEditUI } from './edit/assessmentCoaching.edit';
import { AssessmentCoachingDeleteUI } from './delete/assessmentCoaching.delete';
import { AssessmentCoachingSeekUI } from './seek/assessmentCoaching.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Coaching_ModuleFunc } from '../Coaching/coaching.module.func';

@NgModule({
    declarations: [
        AssessmentCoachingEditUI,
		AssessmentCoachingDeleteUI,
		AssessmentCoachingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		Coaching_ModuleFunc
    ],
    exports: [
        AssessmentCoachingEditUI,
		AssessmentCoachingDeleteUI,
		AssessmentCoachingSeekUI
    ],
    providers: [
       //AssessmentCoachingService,
       // AssessmentCoachingServiceCollection,
    ]
})

export class AssessmentCoaching_ModuleFunc { }