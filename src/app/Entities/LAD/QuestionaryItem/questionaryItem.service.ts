import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QuestionaryItem } from './questionaryItem';
import { QuestionaryItemServiceCollection } from './questionaryItem.service.collection';

import { QuestionaryTypeService } from '../QuestionaryType/questionaryType.service';
import { AnswerTypeService } from '../AnswerType/answerType.service';
import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';


@Injectable({ providedIn: 'root' })
export class QuestionaryItemService extends Service<QuestionaryItem> implements IService<QuestionaryItem> {

  constructor(public ServiceCollection: QuestionaryItemServiceCollection,
		public QuestionaryTypeService: QuestionaryTypeService,
		public AnswerTypeService: AnswerTypeService) {
    super(ServiceCollection.API_Operation, QuestionaryItem.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<QuestionaryItem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QuestionaryItem[]> {
    return super.RetrieveAll();
  }

  Save(questionaryItem: QuestionaryItem): Promise<QuestionaryItem> {
    if (!QuestionaryItem.Validate(questionaryItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(questionaryItem);
    }
    return super.Save(questionaryItem);
  }

  SaveAttached(questionaryItem: QuestionaryItem): Promise<QuestionaryItem> {
    if (!QuestionaryItem.Validate(questionaryItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(questionaryItem);
    }
    return super.SaveAttached(questionaryItem);
  }

  SaveCollection(questionaryItemList: QuestionaryItem[]): Promise<Result> {
    return super.SaveCollection(questionaryItemList);
  }

  Delete(questionaryItem: QuestionaryItem): Promise<boolean> {
    return super.Delete(questionaryItem);
  }

  Seek(questionaryItem: QuestionaryItem = QuestionaryItem.SeekInstance()): Promise<QuestionaryItem[]> {
    return super.Seek(questionaryItem);
  }

  SeekLast(questionaryItem: QuestionaryItem): Promise<QuestionaryItem> {
    return super.SeekLast(questionaryItem);
  }

  SeekByValue(value: string = ''): Promise<QuestionaryItem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}