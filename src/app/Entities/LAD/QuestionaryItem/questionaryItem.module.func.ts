import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QuestionaryItemService } from './questionaryItem.service';
import { QuestionaryItemServiceCollection } from './questionaryItem.service.collection';
import { QuestionaryItemMasterUI } from './master/questionaryItem.master';
import { QuestionaryItemEditUI } from './edit/questionaryItem.edit';
import { QuestionaryItemDeleteUI } from './delete/questionaryItem.delete';
import { QuestionaryItemSeekUI } from './seek/questionaryItem.seek';

import { QuestionaryType_ModuleFunc } from '../QuestionaryType/questionaryType.module.func';
import { AnswerType_ModuleFunc } from '../AnswerType/answerType.module.func';

@NgModule({
    declarations: [
        QuestionaryItemEditUI,
		QuestionaryItemDeleteUI,
		QuestionaryItemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        QuestionaryType_ModuleFunc,
		AnswerType_ModuleFunc
    ],
    exports: [
        QuestionaryItemEditUI,
		QuestionaryItemDeleteUI,
		QuestionaryItemSeekUI
    ]
})

export class QuestionaryItem_ModuleFunc { }