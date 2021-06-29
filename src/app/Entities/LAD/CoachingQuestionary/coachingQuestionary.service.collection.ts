import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CoachingQuestionary } from './coachingQuestionary';

import { CoachingQuestionaryDetail } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';


@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryServiceCollection extends ServiceCollection<CoachingQuestionary> {

  constructor(public API_Operation: API_Operation<CoachingQuestionary>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCoachingQuestionaryAnswered(coachingQuestionary: CoachingQuestionary, coachingQuestionaryAnswered: CoachingQuestionaryAnswered = CoachingQuestionaryAnswered.SeekInstance()): Promise<CoachingQuestionaryAnswered[]> {
    return super.CollectionOf<CoachingQuestionaryAnswered>(coachingQuestionary, coachingQuestionaryAnswered);
  }

  CollectionOfCoachingQuestionaryDetail(coachingQuestionary: CoachingQuestionary, coachingQuestionaryDetail: CoachingQuestionaryDetail = CoachingQuestionaryDetail.SeekInstance()): Promise<CoachingQuestionaryDetail[]> {
    return super.CollectionOf<CoachingQuestionaryDetail>(coachingQuestionary, coachingQuestionaryDetail);
  }

	//endregion
}