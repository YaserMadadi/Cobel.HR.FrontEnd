import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryDetailService } from './coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailServiceCollection } from './coachingQuestionaryDetail.service.collection';
import { CoachingQuestionaryDetailMasterUI } from './master/coachingQuestionaryDetail.master';
import { CoachingQuestionaryDetail_ModuleDetail } from './coachingQuestionaryDetail.module.detail';

@NgModule({
    declarations: [
        CoachingQuestionaryDetailMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CoachingQuestionaryDetail_ModuleDetail
    ],
    exports: [
        CoachingQuestionaryDetailMasterUI
    ]
})

export class CoachingQuestionaryDetail_ModuleMaster { }