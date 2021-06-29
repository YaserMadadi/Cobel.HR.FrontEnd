import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConfigTargetSettingService } from './configTargetSetting.service';
import { ConfigTargetSettingServiceCollection } from './configTargetSetting.service.collection';

import { ConfigTargetSettingIndexUI } from './index/configTargetSetting.index';
import { ConfigTargetSetting_ModuleFunc } from './configTargetSetting.module.func';
import { ConfigTargetSetting_ModuleMaster } from './configTargetSetting.module.master';


import { ConfigQualitativeObjective_ModuleFunc } from '../ConfigQualitativeObjective/configQualitativeObjective.module.func';
import { ConfigQualitativeObjective_ModuleMaster } from '../ConfigQualitativeObjective/configQualitativeObjective.module.master';

@NgModule({
  declarations: [
    ConfigTargetSettingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ConfigTargetSetting_ModuleMaster,
		ConfigQualitativeObjective_ModuleMaster,
  ],
  exports: [
    ConfigTargetSettingIndexUI,
		ConfigTargetSetting_ModuleMaster,
  ],
  providers: [
    // ConfigTargetSettingService,
    // ConfigTargetSettingServiceCollection
  ]
})
export class ConfigTargetSettingModule {}