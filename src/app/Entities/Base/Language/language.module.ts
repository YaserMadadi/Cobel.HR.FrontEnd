import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { LanguageService } from './language.service';
import { LanguageServiceCollection } from './language.service.collection';

import { LanguageIndexUI } from './index/language.index';
import { Language_ModuleFunc } from './language.module.func';
import { Language_ModuleMaster } from './language.module.master';


import { LanguageAbility_ModuleFunc } from '../../HR/LanguageAbility/languageAbility.module.func';
import { LanguageAbility_ModuleMaster } from '../../HR/LanguageAbility/languageAbility.module.master';

@NgModule({
  declarations: [
    LanguageIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Language_ModuleMaster,
		LanguageAbility_ModuleMaster,
  ],
  exports: [
    LanguageIndexUI,
		Language_ModuleMaster,
  ],
  providers: [
    // LanguageService,
    // LanguageServiceCollection
  ]
})
export class LanguageModule {}