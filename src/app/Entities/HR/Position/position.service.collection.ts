import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Position } from './position';

import { PromotionAssessment } from '../../LAD/PromotionAssessment/promotionAssessment';
import { ConfigTargetSetting } from '../../PMS/ConfigTargetSetting/configTargetSetting';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';
import { RotationAssessment } from '../../LAD/RotationAssessment/rotationAssessment';


@Injectable({ providedIn: 'root' })
export class PositionServiceCollection extends ServiceCollection<Position> {

  constructor(public API_Operation: API_Operation<Position>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfChildPosition(parent: Position, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(parent, position, 'Parent');
  }

  CollectionOfConfigTargetSetting(position: Position, configTargetSetting: ConfigTargetSetting = ConfigTargetSetting.SeekInstance()): Promise<ConfigTargetSetting[]> {
    return super.CollectionOf<ConfigTargetSetting>(position, configTargetSetting);
  }

  CollectionOfPositionAssignment(position: Position, positionAssignment: PositionAssignment = PositionAssignment.SeekInstance()): Promise<PositionAssignment[]> {
    return super.CollectionOf<PositionAssignment>(position, positionAssignment);
  }

  CollectionOfPromotionAssessment_CurrentPosition(currentPosition: Position, promotionAssessment: PromotionAssessment = PromotionAssessment.SeekInstance()): Promise<PromotionAssessment[]> {
    return super.CollectionOf<PromotionAssessment>(currentPosition, promotionAssessment, 'CurrentPosition');
  }

  CollectionOfPromotionAssessment_ProposedPosition(proposedPosition: Position, promotionAssessment: PromotionAssessment = PromotionAssessment.SeekInstance()): Promise<PromotionAssessment[]> {
    return super.CollectionOf<PromotionAssessment>(proposedPosition, promotionAssessment, 'ProposedPosition');
  }

  CollectionOfRotationAssessment_CurrentPosition(currentPosition: Position, rotationAssessment: RotationAssessment = RotationAssessment.SeekInstance()): Promise<RotationAssessment[]> {
    return super.CollectionOf<RotationAssessment>(currentPosition, rotationAssessment, 'CurrentPosition');
  }

  CollectionOfRotationAssessment_ProposedPosition(proposedPosition: Position, rotationAssessment: RotationAssessment = RotationAssessment.SeekInstance()): Promise<RotationAssessment[]> {
    return super.CollectionOf<RotationAssessment>(proposedPosition, rotationAssessment, 'ProposedPosition');
  }

  CollectionOfTargetSetting(position: Position, targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.CollectionOf<TargetSetting>(position, targetSetting);
  }

	//endregion
}