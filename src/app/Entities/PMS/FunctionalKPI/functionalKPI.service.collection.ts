import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FunctionalKPI } from './functionalKPI';

import { FunctionalKPIComment } from '../FunctionalKPIComment/functionalKPIComment';
import { FunctionalAppraise } from '../FunctionalAppraise/functionalAppraise';


@Injectable({ providedIn: 'root' })
export class FunctionalKPIServiceCollection extends ServiceCollection<FunctionalKPI> {

  constructor(public API_Operation: API_Operation<FunctionalKPI>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfFunctionalAppraise(functionalKPI: FunctionalKPI, functionalAppraise: FunctionalAppraise = FunctionalAppraise.SeekInstance()): Promise<FunctionalAppraise[]> {
    return super.CollectionOf<FunctionalAppraise>(functionalKPI, functionalAppraise);
  }

  CollectionOfFunctionalKPIComment(functionalKPI: FunctionalKPI, functionalKPIComment: FunctionalKPIComment = FunctionalKPIComment.SeekInstance()): Promise<FunctionalKPIComment[]> {
    return super.CollectionOf<FunctionalKPIComment>(functionalKPI, functionalKPIComment);
  }

	//endregion
}