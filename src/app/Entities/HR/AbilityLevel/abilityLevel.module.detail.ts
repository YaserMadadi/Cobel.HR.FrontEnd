import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AbilityLevelService } from './abilityLevel.service';
import { AbilityLevelServiceCollection } from './abilityLevel.service.collection';


import { ListeningLevel_LanguageAbility_DetailUI } from './detail/listeningLevel-languageAbility.detail';
import { LanguageAbility_ModuleMaster } from '../LanguageAbility/languageAbility.module.master';
import { SpeackingLevel_LanguageAbility_DetailUI } from './detail/speackingLevel-languageAbility.detail';
import { ReadingLevel_LanguageAbility_DetailUI } from './detail/readingLevel-languageAbility.detail';
import { WritingLevel_LanguageAbility_DetailUI } from './detail/writingLevel-languageAbility.detail';

@NgModule({
  declarations: [
    ListeningLevel_LanguageAbility_DetailUI,
		SpeackingLevel_LanguageAbility_DetailUI,
		ReadingLevel_LanguageAbility_DetailUI,
		WritingLevel_LanguageAbility_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
  ],
  exports: [
    ListeningLevel_LanguageAbility_DetailUI,
		SpeackingLevel_LanguageAbility_DetailUI,
		ReadingLevel_LanguageAbility_DetailUI,
		WritingLevel_LanguageAbility_DetailUI
  ],
  providers: [
    //AbilityLevelService,
    //AbilityLevelServiceCollection
  ]
})
export class AbilityLevel_ModuleDetail { }