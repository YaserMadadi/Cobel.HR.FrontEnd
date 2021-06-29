import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FeedbackSession } from './feedbackSession';



@Injectable({ providedIn: 'root' })
export class FeedbackSessionServiceCollection extends ServiceCollection<FeedbackSession> {

  constructor(public API_Operation: API_Operation<FeedbackSession>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}