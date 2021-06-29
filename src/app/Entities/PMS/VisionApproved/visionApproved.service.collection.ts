import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { VisionApproved } from './visionApproved';



@Injectable({ providedIn: 'root' })
export class VisionApprovedServiceCollection extends ServiceCollection<VisionApproved> {

  constructor(public API_Operation: API_Operation<VisionApproved>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}