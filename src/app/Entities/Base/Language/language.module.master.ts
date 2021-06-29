import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LanguageService } from './language.service';
import { LanguageServiceCollection } from './language.service.collection';
import { LanguageMasterUI } from './master/language.master';
import { Language_ModuleDetail } from './language.module.detail';

@NgModule({
    declarations: [
        LanguageMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Language_ModuleDetail
    ],
    exports: [
        LanguageMasterUI
    ],
    providers: [
        //LanguageService,
       // LanguageServiceCollection   
    ]
})

export class Language_ModuleMaster { }