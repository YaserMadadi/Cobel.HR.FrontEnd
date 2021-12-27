
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { TargetSettingModeService } from './targetSettingMode.service';
import { TargetSettingModeServiceCollection } from './targetSettingMode.service.collection';

import { TargetSettingModeIndexUI } from './index/targetSettingMode.index';
import { TargetSettingMode_ModuleFunc } from './targetSettingMode.module.func';
import { TargetSettingMode_ModuleMaster } from './targetSettingMode.module.master';


import { TargetSetting_ModuleFunc } from '../../PMS/TargetSetting/targetSetting.module.func';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    TargetSettingModeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    TargetSettingMode_ModuleMaster,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    TargetSettingModeIndexUI,
		TargetSettingMode_ModuleMaster,
   ]
})
export class TargetSettingModeModule {}