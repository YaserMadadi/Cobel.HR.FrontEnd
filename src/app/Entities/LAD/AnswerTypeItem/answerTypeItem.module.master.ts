import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AnswerTypeItemService } from './answerTypeItem.service';
import { AnswerTypeItemServiceCollection } from './answerTypeItem.service.collection';
import { AnswerTypeItemMasterUI } from './master/answerTypeItem.master';
import { AnswerTypeItem_ModuleDetail } from './answerTypeItem.module.detail';

@NgModule({
    declarations: [
        AnswerTypeItemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AnswerTypeItem_ModuleDetail
    ],
    exports: [
        AnswerTypeItemMasterUI
    ],
    providers: [
        //AnswerTypeItemService,
       // AnswerTypeItemServiceCollection   
    ]
})

export class AnswerTypeItem_ModuleMaster { }