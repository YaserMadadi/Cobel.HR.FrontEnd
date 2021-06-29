import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { BehavioralKPI } from './behavioralKPI';

import { BehavioralAppraise } from '../BehavioralAppraise/behavioralAppraise';


@Injectable({ providedIn: 'root' })
export class BehavioralKPIServiceCollection extends ServiceCollection<BehavioralKPI> {

  constructor(public API_Operation: API_Operation<BehavioralKPI>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralAppraise(behavioralKPI: BehavioralKPI, behavioralAppraise: BehavioralAppraise = BehavioralAppraise.SeekInstance()): Promise<BehavioralAppraise[]> {
    return super.CollectionOf<BehavioralAppraise>(behavioralKPI, behavioralAppraise);
  }

	//endregion
}