import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Vision } from './vision';

import { VisionComment } from '../VisionComment/visionComment';
import { VisionApproved } from '../VisionApproved/visionApproved';
import { IndividualDevelopmentPlan } from '../IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class VisionServiceCollection extends ServiceCollection<Vision> {

  constructor(public API_Operation: API_Operation<Vision>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfIndividualDevelopmentPlan(vision: Vision, individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.CollectionOf<IndividualDevelopmentPlan>(vision, individualDevelopmentPlan);
  }

  CollectionOfVisionApproved(vision: Vision, visionApproved: VisionApproved = VisionApproved.SeekInstance()): Promise<VisionApproved[]> {
    return super.CollectionOf<VisionApproved>(vision, visionApproved);
  }

  CollectionOfVisionComment(vision: Vision, visionComment: VisionComment = VisionComment.SeekInstance()): Promise<VisionComment[]> {
    return super.CollectionOf<VisionComment>(vision, visionComment);
  }

	//endregion
}