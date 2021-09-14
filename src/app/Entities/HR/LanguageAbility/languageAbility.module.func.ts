import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { LanguageAbilityService } from './languageAbility.service';
import { LanguageAbilityServiceCollection } from './languageAbility.service.collection';
import { LanguageAbilityMasterUI } from './master/languageAbility.master';
import { LanguageAbilityEditUI } from './edit/languageAbility.edit';
import { LanguageAbilityDeleteUI } from './delete/languageAbility.delete';
import { LanguageAbilitySeekUI } from './seek/languageAbility.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { Language_ModuleFunc } from '../../Base/Language/language.module.func';
import { AbilityLevel_ModuleFunc } from '../AbilityLevel/abilityLevel.module.func';

@NgModule({
    declarations: [
        LanguageAbilityEditUI,
		LanguageAbilityDeleteUI,
		LanguageAbilitySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		Language_ModuleFunc,
		AbilityLevel_ModuleFunc,
		AbilityLevel_ModuleFunc,
		AbilityLevel_ModuleFunc,
		AbilityLevel_ModuleFunc
    ],
    exports: [
        LanguageAbilityEditUI,
		LanguageAbilityDeleteUI,
		LanguageAbilitySeekUI
    ]
})

export class LanguageAbility_ModuleFunc { }