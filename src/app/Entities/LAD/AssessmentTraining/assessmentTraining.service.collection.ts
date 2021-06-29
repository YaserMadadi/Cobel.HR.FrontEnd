import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AssessmentTraining } from './assessmentTraining';



@Injectable({ providedIn: 'root' })
export class AssessmentTrainingServiceCollection extends ServiceCollection<AssessmentTraining> {

  constructor(public API_Operation: API_Operation<AssessmentTraining>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}