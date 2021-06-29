import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AnswerTypeItemService } from './answerTypeItem.service';
import { AnswerTypeItemServiceCollection } from './answerTypeItem.service.collection';
import { AnswerTypeItemMasterUI } from './master/answerTypeItem.master';
import { AnswerTypeItemEditUI } from './edit/answerTypeItem.edit';
import { AnswerTypeItemDeleteUI } from './delete/answerTypeItem.delete';
import { AnswerTypeItemSeekUI } from './seek/answerTypeItem.seek';

import { AnswerType_ModuleFunc } from '../AnswerType/answerType.module.func';

@NgModule({
    declarations: [
        AnswerTypeItemEditUI,
		AnswerTypeItemDeleteUI,
		AnswerTypeItemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        AnswerType_ModuleFunc
    ],
    exports: [
        AnswerTypeItemEditUI,
		AnswerTypeItemDeleteUI,
		AnswerTypeItemSeekUI
    ],
    providers: [
       //AnswerTypeItemService,
       // AnswerTypeItemServiceCollection,
    ]
})

export class AnswerTypeItem_ModuleFunc { }