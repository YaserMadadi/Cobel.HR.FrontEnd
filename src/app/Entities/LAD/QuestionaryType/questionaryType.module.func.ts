import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QuestionaryTypeService } from './questionaryType.service';
import { QuestionaryTypeServiceCollection } from './questionaryType.service.collection';
import { QuestionaryTypeMasterUI } from './master/questionaryType.master';
import { QuestionaryTypeEditUI } from './edit/questionaryType.edit';
import { QuestionaryTypeDeleteUI } from './delete/questionaryType.delete';
import { QuestionaryTypeSeekUI } from './seek/questionaryType.seek';


@NgModule({
    declarations: [
        QuestionaryTypeEditUI,
		QuestionaryTypeDeleteUI,
		QuestionaryTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        QuestionaryTypeEditUI,
		QuestionaryTypeDeleteUI,
		QuestionaryTypeSeekUI
    ],
    providers: [
       //QuestionaryTypeService,
       // QuestionaryTypeServiceCollection,
    ]
})

export class QuestionaryType_ModuleFunc { }