import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { QuestionaryType } from './questionaryType';
import { QuestionaryTypeServiceCollection } from './questionaryType.service.collection';

import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Injectable({ providedIn: 'root' })
export class QuestionaryTypeService extends Service<QuestionaryType> implements IService<QuestionaryType> {

  constructor(public ServiceCollection: QuestionaryTypeServiceCollection) {
    super(ServiceCollection.API_Operation, QuestionaryType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<QuestionaryType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<QuestionaryType[]> {
    return super.RetrieveAll();
  }

  Save(questionaryType: QuestionaryType): Promise<QuestionaryType> {
    if (!QuestionaryType.Validate(questionaryType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(questionaryType);
    }
    return super.Save(questionaryType);
  }

  SaveAttached(questionaryType: QuestionaryType): Promise<QuestionaryType> {
    if (!QuestionaryType.Validate(questionaryType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(questionaryType);
    }
    return super.SaveAttached(questionaryType);
  }

  SaveCollection(questionaryTypeList: QuestionaryType[]): Promise<Result> {
    return super.SaveCollection(questionaryTypeList);
  }

  Delete(questionaryType: QuestionaryType): Promise<boolean> {
    return super.Delete(questionaryType);
  }

  Seek(questionaryType: QuestionaryType = QuestionaryType.SeekInstance()): Promise<QuestionaryType[]> {
    return super.Seek(questionaryType);
  }

  SeekLast(questionaryType: QuestionaryType): Promise<QuestionaryType> {
    return super.SeekLast(questionaryType);
  }

  SeekByValue(value: string = ''): Promise<QuestionaryType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}