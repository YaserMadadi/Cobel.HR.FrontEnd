import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DevelopmentGoal } from './developmentGoal';



@Injectable({ providedIn: 'root' })
export class DevelopmentGoalServiceCollection extends ServiceCollection<DevelopmentGoal> {

  constructor(public API_Operation: API_Operation<DevelopmentGoal>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}