import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AnswerTypeItem } from './answerTypeItem';



@Injectable({ providedIn: 'root' })
export class AnswerTypeItemServiceCollection extends ServiceCollection<AnswerTypeItem> {

  constructor(public API_Operation: API_Operation<AnswerTypeItem>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}