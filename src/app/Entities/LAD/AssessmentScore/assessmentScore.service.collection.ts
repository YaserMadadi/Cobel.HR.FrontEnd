import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AssessmentScore } from './assessmentScore';



@Injectable({ providedIn: 'root' })
export class AssessmentScoreServiceCollection extends ServiceCollection<AssessmentScore> {

  constructor(public API_Operation: API_Operation<AssessmentScore>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}