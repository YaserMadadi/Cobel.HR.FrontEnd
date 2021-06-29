import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FunctionalObjective } from './functionalObjective';

import { FunctionalObjectiveComment } from '../FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalKPI } from '../FunctionalKPI/functionalKPI';


@Injectable({ providedIn: 'root' })
export class FunctionalObjectiveServiceCollection extends ServiceCollection<FunctionalObjective> {

  constructor(public API_Operation: API_Operation<FunctionalObjective>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfChildFunctionalObjective(parentalFunctionalObjective: FunctionalObjective, functionalObjective: FunctionalObjective = FunctionalObjective.SeekInstance()): Promise<FunctionalObjective[]> {
    return super.CollectionOf<FunctionalObjective>(parentalFunctionalObjective, functionalObjective, 'ParentalFunctionalObjective');
  }

  CollectionOfFunctionalKPI(functionalObjective: FunctionalObjective, functionalKPI: FunctionalKPI = FunctionalKPI.SeekInstance()): Promise<FunctionalKPI[]> {
    return super.CollectionOf<FunctionalKPI>(functionalObjective, functionalKPI);
  }

  CollectionOfFunctionalObjectiveComment(functionalObjective: FunctionalObjective, functionalObjectiveComment: FunctionalObjectiveComment = FunctionalObjectiveComment.SeekInstance()): Promise<FunctionalObjectiveComment[]> {
    return super.CollectionOf<FunctionalObjectiveComment>(functionalObjective, functionalObjectiveComment);
  }

	//endregion
}