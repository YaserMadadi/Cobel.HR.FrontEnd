import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { AppraisalApproverConfig } from './appraisalApproverConfig';



@Injectable({ providedIn: 'root' })
export class AppraisalApproverConfigServiceCollection extends ServiceCollection<AppraisalApproverConfig> {

  constructor(public API_Operation: API_Operation<AppraisalApproverConfig>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}