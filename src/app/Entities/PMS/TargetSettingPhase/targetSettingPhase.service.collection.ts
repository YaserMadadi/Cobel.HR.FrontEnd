import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { TargetSettingPhase } from './targetSettingPhase';

import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { FinalApprovement } from '../FinalApprovement/finalApprovement';
import { FunctionalObjective } from '../FunctionalObjective/functionalObjective';
import { FinalAppraise } from '../FinalAppraise/finalAppraise';
import { QuantitativeAppraise } from '../QuantitativeAppraise/quantitativeAppraise';
import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeObjective } from '../QualitativeObjective/qualitativeObjective';
import { AppraiseResult } from '../AppraiseResult/appraiseResult';
import { Vision } from '../Vision/vision';
import { Employee } from '../../HR/Employee/employee';
import { EndPointController } from '../../../../xcore/tools/controller.endPoint';


@Injectable({ providedIn: 'root' })
export class TargetSettingPhaseServiceCollection extends ServiceCollection<TargetSettingPhase> {

  constructor(public API_Operation: API_Operation<TargetSettingPhase>) {
    super(API_Operation);
  }

  //region CollectionMethods

  //endregion

 
}