import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LanguageService } from './language.service';
import { LanguageServiceCollection } from './language.service.collection';


import { Language_LanguageAbility_DetailUI } from './detail/language-languageAbility.detail';
import { LanguageAbility_ModuleMaster } from '../../HR/LanguageAbility/languageAbility.module.master';

@NgModule({
  declarations: [
    Language_LanguageAbility_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		LanguageAbility_ModuleMaster,
  ],
  exports: [
    Language_LanguageAbility_DetailUI
  ]
})
export class Language_ModuleDetail { }