import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QuestionaryType } from './questionaryType';

import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Injectable({ providedIn: 'root' })
export class QuestionaryTypeServiceCollection extends ServiceCollection<QuestionaryType> {

  constructor(public API_Operation: API_Operation<QuestionaryType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCoachingQuestionary(questionaryType: QuestionaryType, coachingQuestionary: CoachingQuestionary = CoachingQuestionary.SeekInstance()): Promise<CoachingQuestionary[]> {
    return super.CollectionOf<CoachingQuestionary>(questionaryType, coachingQuestionary);
  }

  CollectionOfQuestionaryItem(questionaryType: QuestionaryType, questionaryItem: QuestionaryItem = QuestionaryItem.SeekInstance()): Promise<QuestionaryItem[]> {
    return super.CollectionOf<QuestionaryItem>(questionaryType, questionaryItem);
  }

	//endregion
}