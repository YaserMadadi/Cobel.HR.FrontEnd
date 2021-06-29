import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Habitancy } from './habitancy';



@Injectable({ providedIn: 'root' })
export class HabitancyServiceCollection extends ServiceCollection<Habitancy> {

  constructor(public API_Operation: API_Operation<Habitancy>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}