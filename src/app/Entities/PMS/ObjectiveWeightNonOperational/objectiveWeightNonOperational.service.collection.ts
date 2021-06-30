import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ObjectiveWeightNonOperational } from './objectiveWeightNonOperational';



@Injectable({ providedIn: 'root' })
export class ObjectiveWeightNonOperationalServiceCollection extends ServiceCollection<ObjectiveWeightNonOperational> {

  constructor(public API_Operation: API_Operation<ObjectiveWeightNonOperational>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}