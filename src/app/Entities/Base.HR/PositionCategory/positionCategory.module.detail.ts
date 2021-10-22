
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionCategoryService } from './positionCategory.service';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';


import { PositionCategory_ConfigTargetSetting_DetailUI } from './detail/positionCategory-configTargetSetting.detail';
import { PositionCategory_Position_DetailUI } from './detail/positionCategory-position.detail';
import { Position_ModuleMaster } from '../../HR/Position/position.module.master';
import { Unit_ModuleMaster } from '../../HR/Unit/unit.module.master';
import { ConfigTargetSetting_ModuleMaster } from '../../PMS/ConfigTargetSetting/configTargetSetting.module.master';

@NgModule({
  declarations: [
		PositionCategory_Position_DetailUI,
    PositionCategory_ConfigTargetSetting_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		ConfigTargetSetting_ModuleMaster,
		Position_ModuleMaster,
  ],
  exports: [
		PositionCategory_Position_DetailUI,
    PositionCategory_ConfigTargetSetting_DetailUI
  ]
})
export class PositionCategory_ModuleDetail { }