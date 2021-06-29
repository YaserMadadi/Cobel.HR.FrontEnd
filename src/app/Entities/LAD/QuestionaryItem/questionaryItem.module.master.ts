import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuestionaryItemService } from './questionaryItem.service';
import { QuestionaryItemServiceCollection } from './questionaryItem.service.collection';
import { QuestionaryItemMasterUI } from './master/questionaryItem.master';
import { QuestionaryItem_ModuleDetail } from './questionaryItem.module.detail';

@NgModule({
    declarations: [
        QuestionaryItemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QuestionaryItem_ModuleDetail
    ],
    exports: [
        QuestionaryItemMasterUI
    ],
    providers: [
        //QuestionaryItemService,
       // QuestionaryItemServiceCollection   
    ]
})

export class QuestionaryItem_ModuleMaster { }