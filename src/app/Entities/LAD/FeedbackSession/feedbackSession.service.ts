import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FeedbackSession } from './feedbackSession';
import { FeedbackSessionServiceCollection } from './feedbackSession.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';


@Injectable({ providedIn: 'root' })
export class FeedbackSessionService extends Service<FeedbackSession> implements IService<FeedbackSession> {

  constructor(public ServiceCollection: FeedbackSessionServiceCollection,
		public AssessmentService: AssessmentService) {
    super(ServiceCollection.API_Operation, FeedbackSession.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FeedbackSession> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FeedbackSession[]> {
    return super.RetrieveAll();
  }

  Save(feedbackSession: FeedbackSession): Promise<FeedbackSession> {
    if (!FeedbackSession.Validate(feedbackSession)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(feedbackSession);
    }
    return super.Save(feedbackSession);
  }

  SaveAttached(feedbackSession: FeedbackSession): Promise<FeedbackSession> {
    if (!FeedbackSession.Validate(feedbackSession)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(feedbackSession);
    }
    return super.SaveAttached(feedbackSession);
  }

  SaveCollection(feedbackSessionList: FeedbackSession[]): Promise<Result> {
    return super.SaveCollection(feedbackSessionList);
  }

  Delete(feedbackSession: FeedbackSession): Promise<boolean> {
    return super.Delete(feedbackSession);
  }

  Seek(feedbackSession: FeedbackSession = FeedbackSession.SeekInstance()): Promise<FeedbackSession[]> {
    return super.Seek(feedbackSession);
  }

  SeekLast(feedbackSession: FeedbackSession): Promise<FeedbackSession> {
    return super.SeekLast(feedbackSession);
  }

  SeekByValue(value: string = ''): Promise<FeedbackSession[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}