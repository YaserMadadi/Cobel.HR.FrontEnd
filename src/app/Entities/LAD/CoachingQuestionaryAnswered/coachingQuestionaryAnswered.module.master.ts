import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryAnsweredService } from './coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredServiceCollection } from './coachingQuestionaryAnswered.service.collection';
import { CoachingQuestionaryAnsweredMasterUI } from './master/coachingQuestionaryAnswered.master';
import { CoachingQuestionaryAnswered_ModuleDetail } from './coachingQuestionaryAnswered.module.detail';

@NgModule({
    declarations: [
        CoachingQuestionaryAnsweredMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CoachingQuestionaryAnswered_ModuleDetail
    ],
    exports: [
        CoachingQuestionaryAnsweredMasterUI
    ],
    providers: [
        //CoachingQuestionaryAnsweredService,
       // CoachingQuestionaryAnsweredServiceCollection   
    ]
})

export class CoachingQuestionaryAnswered_ModuleMaster { }