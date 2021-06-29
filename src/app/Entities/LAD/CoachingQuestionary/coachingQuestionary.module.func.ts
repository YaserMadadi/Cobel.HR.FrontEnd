import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachingQuestionaryService } from './coachingQuestionary.service';
import { CoachingQuestionaryServiceCollection } from './coachingQuestionary.service.collection';
import { CoachingQuestionaryMasterUI } from './master/coachingQuestionary.master';
import { CoachingQuestionaryEditUI } from './edit/coachingQuestionary.edit';
import { CoachingQuestionaryDeleteUI } from './delete/coachingQuestionary.delete';
import { CoachingQuestionarySeekUI } from './seek/coachingQuestionary.seek';

import { QuestionaryType_ModuleFunc } from '../QuestionaryType/questionaryType.module.func';
import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Person_ModuleFunc } from '../../HR/Person/person.module.func';

@NgModule({
    declarations: [
        CoachingQuestionaryEditUI,
		CoachingQuestionaryDeleteUI,
		CoachingQuestionarySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        QuestionaryType_ModuleFunc,
		Assessment_ModuleFunc,
		Person_ModuleFunc
    ],
    exports: [
        CoachingQuestionaryEditUI,
		CoachingQuestionaryDeleteUI,
		CoachingQuestionarySeekUI
    ],
    providers: [
       //CoachingQuestionaryService,
       // CoachingQuestionaryServiceCollection,
    ]
})

export class CoachingQuestionary_ModuleFunc { }