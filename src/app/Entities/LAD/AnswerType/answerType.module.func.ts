import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AnswerTypeService } from './answerType.service';
import { AnswerTypeServiceCollection } from './answerType.service.collection';
import { AnswerTypeMasterUI } from './master/answerType.master';
import { AnswerTypeEditUI } from './edit/answerType.edit';
import { AnswerTypeDeleteUI } from './delete/answerType.delete';
import { AnswerTypeSeekUI } from './seek/answerType.seek';


@NgModule({
    declarations: [
        AnswerTypeEditUI,
		AnswerTypeDeleteUI,
		AnswerTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        AnswerTypeEditUI,
		AnswerTypeDeleteUI,
		AnswerTypeSeekUI
    ],
    providers: [
       //AnswerTypeService,
       // AnswerTypeServiceCollection,
    ]
})

export class AnswerType_ModuleFunc { }