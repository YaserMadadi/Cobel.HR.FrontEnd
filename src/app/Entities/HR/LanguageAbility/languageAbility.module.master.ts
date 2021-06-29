import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LanguageAbilityService } from './languageAbility.service';
import { LanguageAbilityServiceCollection } from './languageAbility.service.collection';
import { LanguageAbilityMasterUI } from './master/languageAbility.master';
import { LanguageAbility_ModuleDetail } from './languageAbility.module.detail';

@NgModule({
    declarations: [
        LanguageAbilityMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        LanguageAbility_ModuleDetail
    ],
    exports: [
        LanguageAbilityMasterUI
    ],
    providers: [
        //LanguageAbilityService,
       // LanguageAbilityServiceCollection   
    ]
})

export class LanguageAbility_ModuleMaster { }