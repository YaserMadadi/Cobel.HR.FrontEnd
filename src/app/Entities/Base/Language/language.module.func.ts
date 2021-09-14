import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { LanguageService } from './language.service';
import { LanguageServiceCollection } from './language.service.collection';
import { LanguageMasterUI } from './master/language.master';
import { LanguageEditUI } from './edit/language.edit';
import { LanguageDeleteUI } from './delete/language.delete';
import { LanguageSeekUI } from './seek/language.seek';


@NgModule({
    declarations: [
        LanguageEditUI,
		LanguageDeleteUI,
		LanguageSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        LanguageEditUI,
		LanguageDeleteUI,
		LanguageSeekUI
    ]
})

export class Language_ModuleFunc { }