import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionService } from './position.service';
import { PositionServiceCollection } from './position.service.collection';


import { Position_ConfigTargetSetting_DetailUI } from './detail/position-configTargetSetting.detail';
import { ConfigTargetSetting_ModuleMaster } from '../../PMS/ConfigTargetSetting/configTargetSetting.module.master';
import { Position_ChildPosition_DetailUI } from './detail/position-childPosition.detail';
import { Position_ModuleMaster } from '../Position/position.module.master';
import { Position_PositionAssignment_DetailUI } from './detail/position-positionAssignment.detail';
import { PositionAssignment_ModuleMaster } from '../PositionAssignment/positionAssignment.module.master';
import { ProposedPosition_PromotionAssessment_DetailUI } from './detail/proposedPosition-promotionAssessment.detail';
import { PromotionAssessment_ModuleMaster } from '../../LAD/PromotionAssessment/promotionAssessment.module.master';
import { CurrentPosition_PromotionAssessment_DetailUI } from './detail/currentPosition-promotionAssessment.detail';
import { ProposedPosition_RotationAssessment_DetailUI } from './detail/proposedPosition-rotationAssessment.detail';
import { RotationAssessment_ModuleMaster } from '../../LAD/RotationAssessment/rotationAssessment.module.master';
import { CurrentPosition_RotationAssessment_DetailUI } from './detail/currentPosition-rotationAssessment.detail';
import { Position_TargetSetting_DetailUI } from './detail/position-targetSetting.detail';
import { TargetSetting_ModuleMaster } from '../../PMS/TargetSetting/targetSetting.module.master';

@NgModule({
  declarations: [
    Position_ConfigTargetSetting_DetailUI,
		Position_ChildPosition_DetailUI,
		Position_PositionAssignment_DetailUI,
		ProposedPosition_PromotionAssessment_DetailUI,
		CurrentPosition_PromotionAssessment_DetailUI,
		ProposedPosition_RotationAssessment_DetailUI,
		CurrentPosition_RotationAssessment_DetailUI,
		Position_TargetSetting_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		ConfigTargetSetting_ModuleMaster,
		//Position_ModuleMaster,
		PositionAssignment_ModuleMaster,
		PromotionAssessment_ModuleMaster,
		PromotionAssessment_ModuleMaster,
		RotationAssessment_ModuleMaster,
		RotationAssessment_ModuleMaster,
		TargetSetting_ModuleMaster,
  ],
  exports: [
    Position_ConfigTargetSetting_DetailUI,
		Position_ChildPosition_DetailUI,
		Position_PositionAssignment_DetailUI,
		ProposedPosition_PromotionAssessment_DetailUI,
		CurrentPosition_PromotionAssessment_DetailUI,
		ProposedPosition_RotationAssessment_DetailUI,
		CurrentPosition_RotationAssessment_DetailUI,
		Position_TargetSetting_DetailUI
  ],
  providers: [
    //PositionService,
    //PositionServiceCollection
  ]
})
export class Position_ModuleDetail { }