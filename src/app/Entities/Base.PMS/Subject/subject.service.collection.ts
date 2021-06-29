import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Subject } from './subject';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class SubjectServiceCollection extends ServiceCollection<Subject> {

  constructor(public API_Operation: API_Operation<Subject>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfIndividualDevelopmentPlan(subject: Subject, individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.CollectionOf<IndividualDevelopmentPlan>(subject, individualDevelopmentPlan);
  }

	//endregion
}