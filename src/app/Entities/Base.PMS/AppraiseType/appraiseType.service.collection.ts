import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AppraiseType } from './appraiseType';

import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class AppraiseTypeServiceCollection extends ServiceCollection<AppraiseType> {

  constructor(public API_Operation: API_Operation<AppraiseType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralAppraise(appraiseType: AppraiseType, behavioralAppraise: BehavioralAppraise = BehavioralAppraise.SeekInstance()): Promise<BehavioralAppraise[]> {
    return super.CollectionOf<BehavioralAppraise>(appraiseType, behavioralAppraise);
  }

  CollectionOfFunctionalAppraise(appraiseType: AppraiseType, functionalAppraise: FunctionalAppraise = FunctionalAppraise.SeekInstance()): Promise<FunctionalAppraise[]> {
    return super.CollectionOf<FunctionalAppraise>(appraiseType, functionalAppraise);
  }

  CollectionOfQualitativeAppraise(appraiseType: AppraiseType, qualitativeAppraise: QualitativeAppraise = QualitativeAppraise.SeekInstance()): Promise<QualitativeAppraise[]> {
    return super.CollectionOf<QualitativeAppraise>(appraiseType, qualitativeAppraise);
  }

	//endregion
}