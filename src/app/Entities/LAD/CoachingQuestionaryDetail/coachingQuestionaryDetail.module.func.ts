import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachingQuestionaryDetailService } from './coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailServiceCollection } from './coachingQuestionaryDetail.service.collection';
import { CoachingQuestionaryDetailMasterUI } from './master/coachingQuestionaryDetail.master';
import { CoachingQuestionaryDetailEditUI } from './edit/coachingQuestionaryDetail.edit';
import { CoachingQuestionaryDetailDeleteUI } from './delete/coachingQuestionaryDetail.delete';
import { CoachingQuestionaryDetailSeekUI } from './seek/coachingQuestionaryDetail.seek';

import { CoachingQuestionary_ModuleFunc } from '../CoachingQuestionary/coachingQuestionary.module.func';

@NgModule({
    declarations: [
        CoachingQuestionaryDetailEditUI,
		CoachingQuestionaryDetailDeleteUI,
		CoachingQuestionaryDetailSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        CoachingQuestionary_ModuleFunc
    ],
    exports: [
        CoachingQuestionaryDetailEditUI,
		CoachingQuestionaryDetailDeleteUI,
		CoachingQuestionaryDetailSeekUI
    ],
    providers: [
       //CoachingQuestionaryDetailService,
       // CoachingQuestionaryDetailServiceCollection,
    ]
})

export class CoachingQuestionaryDetail_ModuleFunc { }