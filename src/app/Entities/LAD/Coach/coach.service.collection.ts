import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Coach } from './coach';

import { Coaching } from '../Coaching/coaching';
import { CoachConnectionLine } from '../CoachConnectionLine/coachConnectionLine';


@Injectable({ providedIn: 'root' })
export class CoachServiceCollection extends ServiceCollection<Coach> {

  constructor(public API_Operation: API_Operation<Coach>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCoachConnectionLine(coach: Coach, coachConnectionLine: CoachConnectionLine = CoachConnectionLine.SeekInstance()): Promise<CoachConnectionLine[]> {
    return super.CollectionOf<CoachConnectionLine>(coach, coachConnectionLine);
  }

  CollectionOfCoaching(coach: Coach, coaching: Coaching = Coaching.SeekInstance()): Promise<Coaching[]> {
    return super.CollectionOf<Coaching>(coach, coaching);
  }

	//endregion
}