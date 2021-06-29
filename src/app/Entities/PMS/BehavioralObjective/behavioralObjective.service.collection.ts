import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { BehavioralObjective } from './behavioralObjective';

import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';


@Injectable({ providedIn: 'root' })
export class BehavioralObjectiveServiceCollection extends ServiceCollection<BehavioralObjective> {

  constructor(public API_Operation: API_Operation<BehavioralObjective>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralKPI(behavioralObjective: BehavioralObjective, behavioralKPI: BehavioralKPI = BehavioralKPI.SeekInstance()): Promise<BehavioralKPI[]> {
    return super.CollectionOf<BehavioralKPI>(behavioralObjective, behavioralKPI);
  }

	//endregion
}