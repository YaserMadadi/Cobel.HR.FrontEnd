import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AppraiseTime } from './appraiseTime';

import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class AppraiseTimeServiceCollection extends ServiceCollection<AppraiseTime> {

  constructor(public API_Operation: API_Operation<AppraiseTime>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralAppraise(appraiseTime: AppraiseTime, behavioralAppraise: BehavioralAppraise = BehavioralAppraise.SeekInstance()): Promise<BehavioralAppraise[]> {
    return super.CollectionOf<BehavioralAppraise>(appraiseTime, behavioralAppraise);
  }

  CollectionOfFunctionalAppraise(appraiseTime: AppraiseTime, functionalAppraise: FunctionalAppraise = FunctionalAppraise.SeekInstance()): Promise<FunctionalAppraise[]> {
    return super.CollectionOf<FunctionalAppraise>(appraiseTime, functionalAppraise);
  }

  CollectionOfQualitativeAppraise(appraiseTime: AppraiseTime, qualitativeAppraise: QualitativeAppraise = QualitativeAppraise.SeekInstance()): Promise<QualitativeAppraise[]> {
    return super.CollectionOf<QualitativeAppraise>(appraiseTime, qualitativeAppraise);
  }

	//endregion
}