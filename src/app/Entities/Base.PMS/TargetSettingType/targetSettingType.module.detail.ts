
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { TargetSettingTypeService } from './targetSettingType.service';
import { TargetSettingTypeServiceCollection } from './targetSettingType.service.collection';


import { TargetSettingType_TargetSetting_DetailUI } from './detail/targetSettingType-targetSetting.detail';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    TargetSettingType_TargetSetting_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    TargetSettingType_TargetSetting_DetailUI
  ],
  
})
export class TargetSettingType_ModuleDetail { }