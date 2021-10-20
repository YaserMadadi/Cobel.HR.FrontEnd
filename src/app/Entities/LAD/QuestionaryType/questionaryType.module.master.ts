import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuestionaryTypeService } from './questionaryType.service';
import { QuestionaryTypeServiceCollection } from './questionaryType.service.collection';
import { QuestionaryTypeMasterUI } from './master/questionaryType.master';
import { QuestionaryType_ModuleDetail } from './questionaryType.module.detail';

@NgModule({
    declarations: [
        QuestionaryTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        QuestionaryType_ModuleDetail
    ],
    exports: [
        QuestionaryTypeMasterUI
    ]
})

export class QuestionaryType_ModuleMaster { }