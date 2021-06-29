import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FunctionalKPIComment } from './functionalKPIComment';



@Injectable({ providedIn: 'root' })
export class FunctionalKPICommentServiceCollection extends ServiceCollection<FunctionalKPIComment> {

  constructor(public API_Operation: API_Operation<FunctionalKPIComment>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}