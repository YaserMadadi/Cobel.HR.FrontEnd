import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AnswerTypeService } from './answerType.service';
import { AnswerTypeServiceCollection } from './answerType.service.collection';
import { AnswerTypeMasterUI } from './master/answerType.master';
import { AnswerType_ModuleDetail } from './answerType.module.detail';

@NgModule({
    declarations: [
        AnswerTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AnswerType_ModuleDetail
    ],
    exports: [
        AnswerTypeMasterUI
    ]
})

export class AnswerType_ModuleMaster { }