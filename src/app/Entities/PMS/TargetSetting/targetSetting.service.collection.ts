import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { TargetSetting } from './targetSetting';

import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { FinalApprovement } from '../FinalApprovement/finalApprovement';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { FinalAppraise } from '../FinalAppraise/finalAppraise';
import { QuantitativeAppraise } from '../QuantitativeAppraise/quantitativeAppraise';
import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeObjective } from '../QualitativeObjective/qualitativeObjective';
import { AppraiseResult } from '../AppraiseResult/appraiseResult';


@Injectable({ providedIn: 'root' })
export class TargetSettingServiceCollection extends ServiceCollection<TargetSetting> {

  constructor(public API_Operation: API_Operation<TargetSetting>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralObjective(targetSetting: TargetSetting, behavioralObjective: BehavioralObjective = BehavioralObjective.SeekInstance()): Promise<BehavioralObjective[]> {
    return super.CollectionOf<BehavioralObjective>(targetSetting, behavioralObjective);
  }

  CollectionOfFinalAppraise(targetSetting: TargetSetting, finalAppraise: FinalAppraise = FinalAppraise.SeekInstance()): Promise<FinalAppraise[]> {
    return super.CollectionOf<FinalAppraise>(targetSetting, finalAppraise);
  }

  CollectionOfAppraiseResult(targetSetting: TargetSetting, appraiseResult: AppraiseResult = AppraiseResult.SeekInstance()): Promise<AppraiseResult[]> {
    return super.CollectionOf<AppraiseResult>(targetSetting, appraiseResult);
  }

  CollectionOfFinalApprovement(targetSetting: TargetSetting, finalApprovement: FinalApprovement = FinalApprovement.SeekInstance()): Promise<FinalApprovement[]> {
    return super.CollectionOf<FinalApprovement>(targetSetting, finalApprovement);
  }

  CollectionOfFunctionalObjective(targetSetting: TargetSetting, functionalObjective: FunctionalObjective = FunctionalObjective.SeekInstance()): Promise<FunctionalObjective[]> {
    return super.CollectionOf<FunctionalObjective>(targetSetting, functionalObjective);
  }

  CollectionOfNonOperationalAppraise(targetSetting: TargetSetting, nonOperationalAppraise: NonOperationalAppraise = NonOperationalAppraise.SeekInstance()): Promise<NonOperationalAppraise[]> {
    return super.CollectionOf<NonOperationalAppraise>(targetSetting, nonOperationalAppraise);
  }

  CollectionOfOperationalAppraise(targetSetting: TargetSetting, operationalAppraise: OperationalAppraise = OperationalAppraise.SeekInstance()): Promise<OperationalAppraise[]> {
    return super.CollectionOf<OperationalAppraise>(targetSetting, operationalAppraise);
  }

  CollectionOfQualitativeObjective(targetSetting: TargetSetting, qualitativeObjective: QualitativeObjective = QualitativeObjective.SeekInstance()): Promise<QualitativeObjective[]> {
    return super.CollectionOf<QualitativeObjective>(targetSetting, qualitativeObjective);
  }

  CollectionOfQuantitativeAppraise(targetSetting: TargetSetting, quantitativeAppraise: QuantitativeAppraise = QuantitativeAppraise.SeekInstance()): Promise<QuantitativeAppraise[]> {
    return super.CollectionOf<QuantitativeAppraise>(targetSetting, quantitativeAppraise);
  }

	//endregion
}