import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Coaching } from './coaching';

import { CoachingSession } from '../CoachingSession/coachingSession';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';


@Injectable({ providedIn: 'root' })
export class CoachingServiceCollection extends ServiceCollection<Coaching> {

  constructor(public API_Operation: API_Operation<Coaching>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessmentCoaching(coaching: Coaching, assessmentCoaching: AssessmentCoaching = AssessmentCoaching.SeekInstance()): Promise<AssessmentCoaching[]> {
    return super.CollectionOf<AssessmentCoaching>(coaching, assessmentCoaching);
  }

  CollectionOfCoachingSession(coaching: Coaching, coachingSession: CoachingSession = CoachingSession.SeekInstance()): Promise<CoachingSession[]> {
    return super.CollectionOf<CoachingSession>(coaching, coachingSession);
  }

	//endregion
}