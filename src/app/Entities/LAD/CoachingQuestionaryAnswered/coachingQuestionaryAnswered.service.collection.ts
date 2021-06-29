import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CoachingQuestionaryAnswered } from './coachingQuestionaryAnswered';



@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryAnsweredServiceCollection extends ServiceCollection<CoachingQuestionaryAnswered> {

  constructor(public API_Operation: API_Operation<CoachingQuestionaryAnswered>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}