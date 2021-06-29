import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DevelopmentPlanType } from './developmentPlanType';



@Injectable({ providedIn: 'root' })
export class DevelopmentPlanTypeServiceCollection extends ServiceCollection<DevelopmentPlanType> {

  constructor(public API_Operation: API_Operation<DevelopmentPlanType>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}