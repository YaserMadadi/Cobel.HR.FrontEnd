import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CurrentSituation } from './currentSituation';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class CurrentSituationServiceCollection extends ServiceCollection<CurrentSituation> {

  constructor(public API_Operation: API_Operation<CurrentSituation>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfIndividualDevelopmentPlan(currentSituation: CurrentSituation, individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.CollectionOf<IndividualDevelopmentPlan>(currentSituation, individualDevelopmentPlan);
  }

	//endregion
}