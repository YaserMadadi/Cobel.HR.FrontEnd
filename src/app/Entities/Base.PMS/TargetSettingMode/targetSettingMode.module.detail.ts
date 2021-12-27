
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingModeService } from './targetSettingMode.service';
import { TargetSettingModeServiceCollection } from './targetSettingMode.service.collection';


import { TargetSettingMode_TargetSetting_DetailUI } from './detail/targetSettingMode-targetSetting.detail';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    TargetSettingMode_TargetSetting_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    TargetSettingMode_TargetSetting_DetailUI
  ],
  
})
export class TargetSettingMode_ModuleDetail { }