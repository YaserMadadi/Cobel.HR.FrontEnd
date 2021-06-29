import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ExpectedLevel } from './expectedLevel';

import { BehavioralObjective } from '../../PMS/BehavioralObjective/behavioralObjective';


@Injectable({ providedIn: 'root' })
export class ExpectedLevelServiceCollection extends ServiceCollection<ExpectedLevel> {

  constructor(public API_Operation: API_Operation<ExpectedLevel>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralObjective(expectedLevel: ExpectedLevel, behavioralObjective: BehavioralObjective = BehavioralObjective.SeekInstance()): Promise<BehavioralObjective[]> {
    return super.CollectionOf<BehavioralObjective>(expectedLevel, behavioralObjective);
  }

	//endregion
}