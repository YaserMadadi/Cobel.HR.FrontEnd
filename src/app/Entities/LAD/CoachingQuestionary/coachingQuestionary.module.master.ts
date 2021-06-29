import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingQuestionaryService } from './coachingQuestionary.service';
import { CoachingQuestionaryServiceCollection } from './coachingQuestionary.service.collection';
import { CoachingQuestionaryMasterUI } from './master/coachingQuestionary.master';
import { CoachingQuestionary_ModuleDetail } from './coachingQuestionary.module.detail';

@NgModule({
    declarations: [
        CoachingQuestionaryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CoachingQuestionary_ModuleDetail
    ],
    exports: [
        CoachingQuestionaryMasterUI
    ],
    providers: [
        //CoachingQuestionaryService,
       // CoachingQuestionaryServiceCollection   
    ]
})

export class CoachingQuestionary_ModuleMaster { }