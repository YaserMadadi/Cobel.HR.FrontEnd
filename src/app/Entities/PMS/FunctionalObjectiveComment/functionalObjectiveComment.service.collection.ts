import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FunctionalObjectiveComment } from './functionalObjectiveComment';



@Injectable({ providedIn: 'root' })
export class FunctionalObjectiveCommentServiceCollection extends ServiceCollection<FunctionalObjectiveComment> {

  constructor(public API_Operation: API_Operation<FunctionalObjectiveComment>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}