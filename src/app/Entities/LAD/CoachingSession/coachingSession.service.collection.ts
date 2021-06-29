import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CoachingSession } from './coachingSession';



@Injectable({ providedIn: 'root' })
export class CoachingSessionServiceCollection extends ServiceCollection<CoachingSession> {

  constructor(public API_Operation: API_Operation<CoachingSession>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}