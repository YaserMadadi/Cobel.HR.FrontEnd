import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { HabitancyType } from './habitancyType';

import { Habitancy } from '../../HR/Habitancy/habitancy';


@Injectable({ providedIn: 'root' })
export class HabitancyTypeServiceCollection extends ServiceCollection<HabitancyType> {

  constructor(public API_Operation: API_Operation<HabitancyType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfHabitancy(habitancyType: HabitancyType, habitancy: Habitancy = Habitancy.SeekInstance()): Promise<Habitancy[]> {
    return super.CollectionOf<Habitancy>(habitancyType, habitancy);
  }

	//endregion
}