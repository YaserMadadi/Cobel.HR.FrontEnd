import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentCoachingService } from './assessmentCoaching.service';
import { AssessmentCoachingServiceCollection } from './assessmentCoaching.service.collection';
import { AssessmentCoachingMasterUI } from './master/assessmentCoaching.master';
import { AssessmentCoaching_ModuleDetail } from './assessmentCoaching.module.detail';

@NgModule({
    declarations: [
        AssessmentCoachingMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AssessmentCoaching_ModuleDetail
    ],
    exports: [
        AssessmentCoachingMasterUI
    ],
    providers: [
        //AssessmentCoachingService,
       // AssessmentCoachingServiceCollection   
    ]
})

export class AssessmentCoaching_ModuleMaster { }