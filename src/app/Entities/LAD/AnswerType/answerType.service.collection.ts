import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AnswerType } from './answerType';

import { AnswerTypeItem } from '../AnswerTypeItem/answerTypeItem';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Injectable({ providedIn: 'root' })
export class AnswerTypeServiceCollection extends ServiceCollection<AnswerType> {

  constructor(public API_Operation: API_Operation<AnswerType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAnswerTypeItem(answerType: AnswerType, answerTypeItem: AnswerTypeItem = AnswerTypeItem.SeekInstance()): Promise<AnswerTypeItem[]> {
    return super.CollectionOf<AnswerTypeItem>(answerType, answerTypeItem);
  }

  CollectionOfQuestionaryItem(answerType: AnswerType, questionaryItem: QuestionaryItem = QuestionaryItem.SeekInstance()): Promise<QuestionaryItem[]> {
    return super.CollectionOf<QuestionaryItem>(answerType, questionaryItem);
  }

	//endregion
}