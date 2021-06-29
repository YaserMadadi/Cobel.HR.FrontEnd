import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QualitativeAppraise } from './qualitativeAppraise';



@Injectable({ providedIn: 'root' })
export class QualitativeAppraiseServiceCollection extends ServiceCollection<QualitativeAppraise> {

  constructor(public API_Operation: API_Operation<QualitativeAppraise>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}