import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PositionAssignment } from './positionAssignment';

import { PositionAssignmentRepeal } from '../PositionAssignmentRepeal/positionAssignmentRepeal';


@Injectable({ providedIn: 'root' })
export class PositionAssignmentServiceCollection extends ServiceCollection<PositionAssignment> {

  constructor(public API_Operation: API_Operation<PositionAssignment>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPositionAssignmentRepeal(positionAssignment: PositionAssignment, positionAssignmentRepeal: PositionAssignmentRepeal = PositionAssignmentRepeal.SeekInstance()): Promise<PositionAssignmentRepeal[]> {
    return super.CollectionOf<PositionAssignmentRepeal>(positionAssignment, positionAssignmentRepeal);
  }

	//endregion
}