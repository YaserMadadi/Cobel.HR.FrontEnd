import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ApproverType } from './approverType';

import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';


@Injectable({ providedIn: 'root' })
export class ApproverTypeServiceCollection extends ServiceCollection<ApproverType> {

  constructor(public API_Operation: API_Operation<ApproverType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAppraisalApproverConfig(approverType: ApproverType, appraisalApproverConfig: AppraisalApproverConfig = AppraisalApproverConfig.SeekInstance()): Promise<AppraisalApproverConfig[]> {
    return super.CollectionOf<AppraisalApproverConfig>(approverType, appraisalApproverConfig);
  }

	//endregion
}