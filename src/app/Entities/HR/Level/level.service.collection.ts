import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Level } from './level';

import { Position } from '../Position/position';
import { ObjectiveWeightNonOperational } from '../../PMS/ObjectiveWeightNonOperational/objectiveWeightNonOperational';


@Injectable({ providedIn: 'root' })
export class LevelServiceCollection extends ServiceCollection<Level> {

  constructor(public API_Operation: API_Operation<Level>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfObjectiveWeightNonOperational(level: Level, objectiveWeightNonOperational: ObjectiveWeightNonOperational = ObjectiveWeightNonOperational.SeekInstance()): Promise<ObjectiveWeightNonOperational[]> {
    return super.CollectionOf<ObjectiveWeightNonOperational>(level, objectiveWeightNonOperational);
  }

  CollectionOfPosition(level: Level, position: Position = Position.SeekInstance()): Promise<Position[]> {
    return super.CollectionOf<Position>(level, position);
  }

	//endregion
}