import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Unit } from './unit';

import { Position } from '../Position/position';


@Injectable({ providedIn: 'root' })
export class UnitServiceCollection extends ServiceCollection<Unit> {

  constructor(public API_Operation: API_Operation<Unit>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPosition(unit: Unit, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(unit, position);
  }

	//endregion
}