import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { LanguageAbilityService } from './languageAbility.service';
import { LanguageAbilityServiceCollection } from './languageAbility.service.collection';

import { LanguageAbilityIndexUI } from './index/languageAbility.index';
import { LanguageAbility_ModuleFunc } from './languageAbility.module.func';
import { LanguageAbility_ModuleMaster } from './languageAbility.module.master';



@NgModule({
  declarations: [
    LanguageAbilityIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    LanguageAbility_ModuleMaster,
  ],
  exports: [
    LanguageAbilityIndexUI,
		LanguageAbility_ModuleMaster,
  ],
  providers: [
    // LanguageAbilityService,
    // LanguageAbilityServiceCollection
  ]
})
export class LanguageAbilityModule {}