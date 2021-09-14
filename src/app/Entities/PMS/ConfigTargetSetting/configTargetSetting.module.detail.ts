import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigTargetSettingService } from './configTargetSetting.service';
import { ConfigTargetSettingServiceCollection } from './configTargetSetting.service.collection';


import { TargetSettingConfig_ConfigQualitativeObjective_DetailUI } from './detail/targetSettingConfig-configQualitativeObjective.detail';
import { ConfigQualitativeObjective_ModuleMaster } from '../ConfigQualitativeObjective/configQualitativeObjective.module.master';

@NgModule({
  declarations: [
    TargetSettingConfig_ConfigQualitativeObjective_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		ConfigQualitativeObjective_ModuleMaster,
  ],
  exports: [
    TargetSettingConfig_ConfigQualitativeObjective_DetailUI
  ],
  
})
export class ConfigTargetSetting_ModuleDetail { }