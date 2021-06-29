import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AssessmentCoaching } from './assessmentCoaching';



@Injectable({ providedIn: 'root' })
export class AssessmentCoachingServiceCollection extends ServiceCollection<AssessmentCoaching> {

  constructor(public API_Operation: API_Operation<AssessmentCoaching>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}