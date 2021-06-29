import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AbilityLevelService } from './abilityLevel.service';
import { AbilityLevelServiceCollection } from './abilityLevel.service.collection';

import { AbilityLevelIndexUI } from './index/abilityLevel.index';
import { AbilityLevel_ModuleFunc } from './abilityLevel.module.func';
import { AbilityLevel_ModuleMaster } from './abilityLevel.module.master';


import { LanguageAbility_ModuleFunc } from '../LanguageAbility/languageAbility.module.func';
import { LanguageAbility_ModuleMaster } from '../LanguageAbility/languageAbility.module.master';

@NgModule({
  declarations: [
    AbilityLevelIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AbilityLevel_ModuleMaster,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
		LanguageAbility_ModuleMaster,
  ],
  exports: [
    AbilityLevelIndexUI,
		AbilityLevel_ModuleMaster,
  ],
  providers: [
    // AbilityLevelService,
    // AbilityLevelServiceCollection
  ]
})
export class AbilityLevelModule {}