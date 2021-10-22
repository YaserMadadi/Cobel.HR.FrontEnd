import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PositionCategory } from './positionCategory';

// import { Position } from '../Position/position';
// import { Unit } from '../Unit/unit';
import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';
import { Position } from '../../HR/Position/position';
import { Unit } from '../../HR/Unit/unit';
import { ConfigTargetSetting } from '../../PMS/ConfigTargetSetting/configTargetSetting';


@Injectable({ providedIn: 'root' })
export class PositionCategoryServiceCollection extends ServiceCollection<PositionCategory> {

  constructor(public API_Operation: API_Operation<PositionCategory>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPosition(positionCategory: PositionCategory, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(positionCategory, position);
  }

  CollectionOfConfigTargetSetting(positionCategory: PositionCategory, configTargetSetting: ConfigTargetSetting = ConfigTargetSetting.SeekInstance()): Promise<ConfigTargetSetting[]> {
    return super.CollectionOf<ConfigTargetSetting>(positionCategory, configTargetSetting);
  }

	//endregion
}