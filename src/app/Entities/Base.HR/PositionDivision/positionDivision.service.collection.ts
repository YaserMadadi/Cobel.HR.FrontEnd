import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PositionDivision } from './positionDivision';

import { Position } from '../../HR/Position/position';


@Injectable({ providedIn: 'root' })
export class PositionDivisionServiceCollection extends ServiceCollection<PositionDivision> {

  constructor(public API_Operation: API_Operation<PositionDivision>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPosition(positionDivision: PositionDivision, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(positionDivision, position);
  }

	//endregion
}
