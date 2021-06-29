import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DevelopmentPlanPriority } from './developmentPlanPriority';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class DevelopmentPlanPriorityServiceCollection extends ServiceCollection<DevelopmentPlanPriority> {

  constructor(public API_Operation: API_Operation<DevelopmentPlanPriority>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfIndividualDevelopmentPlan_Priority(priority: DevelopmentPlanPriority, individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.CollectionOf<IndividualDevelopmentPlan>(priority, individualDevelopmentPlan, 'Priority');
  }

	//endregion
}