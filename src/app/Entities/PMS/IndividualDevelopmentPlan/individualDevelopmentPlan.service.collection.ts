import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { IndividualDevelopmentPlan } from './individualDevelopmentPlan';

import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';


@Injectable({ providedIn: 'root' })
export class IndividualDevelopmentPlanServiceCollection extends ServiceCollection<IndividualDevelopmentPlan> {

  constructor(public API_Operation: API_Operation<IndividualDevelopmentPlan>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfDevelopmentPlanCompetency(individualDevelopmentPlan: IndividualDevelopmentPlan, developmentPlanCompetency: DevelopmentPlanCompetency = DevelopmentPlanCompetency.SeekInstance()): Promise<DevelopmentPlanCompetency[]> {
    return super.CollectionOf<DevelopmentPlanCompetency>(individualDevelopmentPlan, developmentPlanCompetency);
  }

	//endregion
}