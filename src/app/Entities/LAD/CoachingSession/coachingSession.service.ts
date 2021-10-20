import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CoachingSession } from './coachingSession';
import { CoachingSessionServiceCollection } from './coachingSession.service.collection';

import { CoachingService } from '../Coaching/coaching.service';


@Injectable({ providedIn: 'root' })
export class CoachingSessionService extends Service<CoachingSession> implements IService<CoachingSession> {

  constructor(public ServiceCollection: CoachingSessionServiceCollection,
		public CoachingService: CoachingService) {
    super(ServiceCollection.API_Operation, CoachingSession.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CoachingSession();
}

  RetrieveById(id: number): Promise<CoachingSession> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CoachingSession[]> {
    return super.RetrieveAll();
  }

  Save(coachingSession: CoachingSession): Promise<CoachingSession> {
    if (!CoachingSession.Validate(coachingSession)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingSession);
    }
    return super.Save(coachingSession);
  }

  SaveAttached(coachingSession: CoachingSession): Promise<CoachingSession> {
    if (!CoachingSession.Validate(coachingSession)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingSession);
    }
    return super.SaveAttached(coachingSession);
  }

  SaveCollection(coachingSessionList: CoachingSession[]): Promise<Result> {
    return super.SaveCollection(coachingSessionList);
  }

  Delete(coachingSession: CoachingSession): Promise<boolean> {
    return super.Delete(coachingSession);
  }

  Seek(coachingSession: CoachingSession = CoachingSession.SeekInstance()): Promise<CoachingSession[]> {
    return super.Seek(coachingSession);
  }

  SeekLast(coachingSession: CoachingSession): Promise<CoachingSession> {
    return super.SeekLast(coachingSession);
  }

  SeekByValue(value: string = ''): Promise<CoachingSession[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}