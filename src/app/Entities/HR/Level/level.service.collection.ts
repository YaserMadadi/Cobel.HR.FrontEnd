import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Level } from './level';

import { Position } from '../Position/position';


@Injectable({ providedIn: 'root' })
export class LevelServiceCollection extends ServiceCollection<Level> {

  constructor(public API_Operation: API_Operation<Level>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPosition(level: Level, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(level, position);
  }

	//endregion
}