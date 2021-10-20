import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CoachingQuestionaryAnswered } from './coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredServiceCollection } from './coachingQuestionaryAnswered.service.collection';

import { CoachingQuestionaryService } from '../CoachingQuestionary/coachingQuestionary.service';
import { QuestionaryItemService } from '../QuestionaryItem/questionaryItem.service';


@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryAnsweredService extends Service<CoachingQuestionaryAnswered> implements IService<CoachingQuestionaryAnswered> {

  constructor(public ServiceCollection: CoachingQuestionaryAnsweredServiceCollection,
		public CoachingQuestionaryService: CoachingQuestionaryService,
		public QuestionaryItemService: QuestionaryItemService) {
    super(ServiceCollection.API_Operation, CoachingQuestionaryAnswered.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CoachingQuestionaryAnswered();
}

  RetrieveById(id: number): Promise<CoachingQuestionaryAnswered> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CoachingQuestionaryAnswered[]> {
    return super.RetrieveAll();
  }

  Save(coachingQuestionaryAnswered: CoachingQuestionaryAnswered): Promise<CoachingQuestionaryAnswered> {
    if (!CoachingQuestionaryAnswered.Validate(coachingQuestionaryAnswered)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionaryAnswered);
    }
    return super.Save(coachingQuestionaryAnswered);
  }

  SaveAttached(coachingQuestionaryAnswered: CoachingQuestionaryAnswered): Promise<CoachingQuestionaryAnswered> {
    if (!CoachingQuestionaryAnswered.Validate(coachingQuestionaryAnswered)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionaryAnswered);
    }
    return super.SaveAttached(coachingQuestionaryAnswered);
  }

  SaveCollection(coachingQuestionaryAnsweredList: CoachingQuestionaryAnswered[]): Promise<Result> {
    return super.SaveCollection(coachingQuestionaryAnsweredList);
  }

  Delete(coachingQuestionaryAnswered: CoachingQuestionaryAnswered): Promise<boolean> {
    return super.Delete(coachingQuestionaryAnswered);
  }

  Seek(coachingQuestionaryAnswered: CoachingQuestionaryAnswered = CoachingQuestionaryAnswered.SeekInstance()): Promise<CoachingQuestionaryAnswered[]> {
    return super.Seek(coachingQuestionaryAnswered);
  }

  SeekLast(coachingQuestionaryAnswered: CoachingQuestionaryAnswered): Promise<CoachingQuestionaryAnswered> {
    return super.SeekLast(coachingQuestionaryAnswered);
  }

  SeekByValue(value: string = ''): Promise<CoachingQuestionaryAnswered[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}