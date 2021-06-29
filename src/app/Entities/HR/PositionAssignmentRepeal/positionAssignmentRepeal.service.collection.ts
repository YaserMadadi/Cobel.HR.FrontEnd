import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PositionAssignmentRepeal } from './positionAssignmentRepeal';



@Injectable({ providedIn: 'root' })
export class PositionAssignmentRepealServiceCollection extends ServiceCollection<PositionAssignmentRepeal> {

  constructor(public API_Operation: API_Operation<PositionAssignmentRepeal>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}