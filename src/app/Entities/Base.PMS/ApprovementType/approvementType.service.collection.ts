import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ApprovementType } from './approvementType';

import { VisionApproved } from '../../PMS/VisionApproved/visionApproved';


@Injectable({ providedIn: 'root' })
export class ApprovementTypeServiceCollection extends ServiceCollection<ApprovementType> {

  constructor(public API_Operation: API_Operation<ApprovementType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfVisionApproved(approvementType: ApprovementType, visionApproved: VisionApproved = VisionApproved.SeekInstance()): Promise<VisionApproved[]> {
    return super.CollectionOf<VisionApproved>(approvementType, visionApproved);
  }

	//endregion
}