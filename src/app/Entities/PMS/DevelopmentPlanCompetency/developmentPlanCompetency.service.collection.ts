import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DevelopmentPlanCompetency } from './developmentPlanCompetency';



@Injectable({ providedIn: 'root' })
export class DevelopmentPlanCompetencyServiceCollection extends ServiceCollection<DevelopmentPlanCompetency> {

  constructor(public API_Operation: API_Operation<DevelopmentPlanCompetency>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}