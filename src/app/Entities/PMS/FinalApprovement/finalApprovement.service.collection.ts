import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FinalApprovement } from './finalApprovement';



@Injectable({ providedIn: 'root' })
export class FinalApprovementServiceCollection extends ServiceCollection<FinalApprovement> {

  constructor(public API_Operation: API_Operation<FinalApprovement>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}