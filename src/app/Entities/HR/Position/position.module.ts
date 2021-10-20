import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PositionService } from './position.service';
import { PositionServiceCollection } from './position.service.collection';

import { PositionIndexUI } from './index/position.index';
import { Position_ModuleFunc } from './position.module.func';
import { Position_ModuleMaster } from './position.module.master';


import { ConfigTargetSetting_ModuleFunc } from '../../PMS/ConfigTargetSetting/configTargetSetting.module.func';
import { ConfigTargetSetting_ModuleMaster } from '../../PMS/ConfigTargetSetting/configTargetSetting.module.master';
import { PositionAssignment_ModuleFunc } from '../PositionAssignment/positionAssignment.module.func';
import { PositionAssignment_ModuleMaster } from '../PositionAssignment/positionAssignment.module.master';
import { PromotionAssessment_ModuleFunc } from '../../LAD/PromotionAssessment/promotionAssessment.module.func';
import { PromotionAssessment_ModuleMaster } from '../../LAD/PromotionAssessment/promotionAssessment.module.master';
import { RotationAssessment_ModuleFunc } from '../../LAD/RotationAssessment/rotationAssessment.module.func';
import { RotationAssessment_ModuleMaster } from '../../LAD/RotationAssessment/rotationAssessment.module.master';
import { TargetSetting_ModuleFunc } from '../../PMS/TargetSetting/targetSetting.module.func';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    PositionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Position_ModuleMaster,
		ConfigTargetSetting_ModuleMaster,
		PositionAssignment_ModuleMaster,
		PromotionAssessment_ModuleMaster,
		PromotionAssessment_ModuleMaster,
		RotationAssessment_ModuleMaster,
		RotationAssessment_ModuleMaster,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    PositionIndexUI,
		Position_ModuleMaster,
   ]
})
export class PositionModule {}