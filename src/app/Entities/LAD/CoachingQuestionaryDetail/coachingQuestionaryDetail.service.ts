import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CoachingQuestionaryDetail } from './coachingQuestionaryDetail';
import { CoachingQuestionaryDetailServiceCollection } from './coachingQuestionaryDetail.service.collection';

import { CoachingQuestionaryService } from '../CoachingQuestionary/coachingQuestionary.service';


@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryDetailService extends Service<CoachingQuestionaryDetail> implements IService<CoachingQuestionaryDetail> {

  constructor(public ServiceCollection: CoachingQuestionaryDetailServiceCollection,
		public CoachingQuestionaryService: CoachingQuestionaryService) {
    super(ServiceCollection.API_Operation, CoachingQuestionaryDetail.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CoachingQuestionaryDetail> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CoachingQuestionaryDetail[]> {
    return super.RetrieveAll();
  }

  Save(coachingQuestionaryDetail: CoachingQuestionaryDetail): Promise<CoachingQuestionaryDetail> {
    if (!CoachingQuestionaryDetail.Validate(coachingQuestionaryDetail)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionaryDetail);
    }
    return super.Save(coachingQuestionaryDetail);
  }

  SaveAttached(coachingQuestionaryDetail: CoachingQuestionaryDetail): Promise<CoachingQuestionaryDetail> {
    if (!CoachingQuestionaryDetail.Validate(coachingQuestionaryDetail)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionaryDetail);
    }
    return super.SaveAttached(coachingQuestionaryDetail);
  }

  SaveCollection(coachingQuestionaryDetailList: CoachingQuestionaryDetail[]): Promise<Result> {
    return super.SaveCollection(coachingQuestionaryDetailList);
  }

  Delete(coachingQuestionaryDetail: CoachingQuestionaryDetail): Promise<boolean> {
    return super.Delete(coachingQuestionaryDetail);
  }

  Seek(coachingQuestionaryDetail: CoachingQuestionaryDetail = CoachingQuestionaryDetail.SeekInstance()): Promise<CoachingQuestionaryDetail[]> {
    return super.Seek(coachingQuestionaryDetail);
  }

  SeekLast(coachingQuestionaryDetail: CoachingQuestionaryDetail): Promise<CoachingQuestionaryDetail> {
    return super.SeekLast(coachingQuestionaryDetail);
  }

  SeekByValue(value: string = ''): Promise<CoachingQuestionaryDetail[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}