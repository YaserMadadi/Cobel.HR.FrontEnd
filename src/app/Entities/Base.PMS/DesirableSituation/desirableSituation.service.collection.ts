import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { DesirableSituation } from './desirableSituation';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class DesirableSituationServiceCollection extends ServiceCollection<DesirableSituation> {

  constructor(public API_Operation: API_Operation<DesirableSituation>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfIndividualDevelopmentPlan(desirableSituation: DesirableSituation, individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.CollectionOf<IndividualDevelopmentPlan>(desirableSituation, individualDevelopmentPlan);
  }

	//endregion
}