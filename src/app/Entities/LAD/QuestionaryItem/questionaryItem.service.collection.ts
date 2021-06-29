import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QuestionaryItem } from './questionaryItem';

import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';


@Injectable({ providedIn: 'root' })
export class QuestionaryItemServiceCollection extends ServiceCollection<QuestionaryItem> {

  constructor(public API_Operation: API_Operation<QuestionaryItem>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCoachingQuestionaryAnswered(questionaryItem: QuestionaryItem, coachingQuestionaryAnswered: CoachingQuestionaryAnswered = CoachingQuestionaryAnswered.SeekInstance()): Promise<CoachingQuestionaryAnswered[]> {
    return super.CollectionOf<CoachingQuestionaryAnswered>(questionaryItem, coachingQuestionaryAnswered);
  }

	//endregion
}