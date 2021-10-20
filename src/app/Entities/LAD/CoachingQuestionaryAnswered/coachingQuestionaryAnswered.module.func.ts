import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachingQuestionaryAnsweredService } from './coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredServiceCollection } from './coachingQuestionaryAnswered.service.collection';
import { CoachingQuestionaryAnsweredMasterUI } from './master/coachingQuestionaryAnswered.master';
import { CoachingQuestionaryAnsweredEditUI } from './edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnsweredDeleteUI } from './delete/coachingQuestionaryAnswered.delete';
import { CoachingQuestionaryAnsweredSeekUI } from './seek/coachingQuestionaryAnswered.seek';

import { CoachingQuestionary_ModuleFunc } from '../CoachingQuestionary/coachingQuestionary.module.func';
import { QuestionaryItem_ModuleFunc } from '../QuestionaryItem/questionaryItem.module.func';

@NgModule({
    declarations: [
        CoachingQuestionaryAnsweredEditUI,
		CoachingQuestionaryAnsweredDeleteUI,
		CoachingQuestionaryAnsweredSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        CoachingQuestionary_ModuleFunc,
		QuestionaryItem_ModuleFunc
    ],
    exports: [
        CoachingQuestionaryAnsweredEditUI,
		CoachingQuestionaryAnsweredDeleteUI,
		CoachingQuestionaryAnsweredSeekUI
    ]
})

export class CoachingQuestionaryAnswered_ModuleFunc { }