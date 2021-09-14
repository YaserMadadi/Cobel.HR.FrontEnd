
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { TargetSettingTypeService } from './targetSettingType.service';
import { TargetSettingTypeServiceCollection } from './targetSettingType.service.collection';

import { TargetSettingTypeIndexUI } from './index/targetSettingType.index';
import { TargetSettingType_ModuleFunc } from './targetSettingType.module.func';
import { TargetSettingType_ModuleMaster } from './targetSettingType.module.master';


import { TargetSetting_ModuleFunc } from '../../PMS/TargetSetting/targetSetting.module.func';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    TargetSettingTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    TargetSettingType_ModuleMaster,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    TargetSettingTypeIndexUI,
		TargetSettingType_ModuleMaster,
  ]})
export class TargetSettingTypeModule {}