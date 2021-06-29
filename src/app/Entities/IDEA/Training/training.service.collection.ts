import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Training } from './training';



@Injectable({ providedIn: 'root' })
export class TrainingServiceCollection extends ServiceCollection<Training> {

  constructor(public API_Operation: API_Operation<Training>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}