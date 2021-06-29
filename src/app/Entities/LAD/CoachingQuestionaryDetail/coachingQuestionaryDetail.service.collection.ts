import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CoachingQuestionaryDetail } from './coachingQuestionaryDetail';



@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryDetailServiceCollection extends ServiceCollection<CoachingQuestionaryDetail> {

  constructor(public API_Operation: API_Operation<CoachingQuestionaryDetail>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}