import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { VisionComment } from './visionComment';



@Injectable({ providedIn: 'root' })
export class VisionCommentServiceCollection extends ServiceCollection<VisionComment> {

  constructor(public API_Operation: API_Operation<VisionComment>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}