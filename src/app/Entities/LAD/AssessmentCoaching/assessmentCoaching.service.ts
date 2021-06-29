import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AssessmentCoaching } from './assessmentCoaching';
import { AssessmentCoachingServiceCollection } from './assessmentCoaching.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { CoachingService } from '../Coaching/coaching.service';


@Injectable({ providedIn: 'root' })
export class AssessmentCoachingService extends Service<AssessmentCoaching> implements IService<AssessmentCoaching> {

  constructor(public ServiceCollection: AssessmentCoachingServiceCollection,
		public AssessmentService: AssessmentService,
		public CoachingService: CoachingService) {
    super(ServiceCollection.API_Operation, AssessmentCoaching.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<AssessmentCoaching> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AssessmentCoaching[]> {
    return super.RetrieveAll();
  }

  Save(assessmentCoaching: AssessmentCoaching): Promise<AssessmentCoaching> {
    if (!AssessmentCoaching.Validate(assessmentCoaching)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentCoaching);
    }
    return super.Save(assessmentCoaching);
  }

  SaveAttached(assessmentCoaching: AssessmentCoaching): Promise<AssessmentCoaching> {
    if (!AssessmentCoaching.Validate(assessmentCoaching)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentCoaching);
    }
    return super.SaveAttached(assessmentCoaching);
  }

  SaveCollection(assessmentCoachingList: AssessmentCoaching[]): Promise<Result> {
    return super.SaveCollection(assessmentCoachingList);
  }

  Delete(assessmentCoaching: AssessmentCoaching): Promise<boolean> {
    return super.Delete(assessmentCoaching);
  }

  Seek(assessmentCoaching: AssessmentCoaching = AssessmentCoaching.SeekInstance()): Promise<AssessmentCoaching[]> {
    return super.Seek(assessmentCoaching);
  }

  SeekLast(assessmentCoaching: AssessmentCoaching): Promise<AssessmentCoaching> {
    return super.SeekLast(assessmentCoaching);
  }

  SeekByValue(value: string = ''): Promise<AssessmentCoaching[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}