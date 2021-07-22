import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AnswerType } from './answerType';
import { AnswerTypeServiceCollection } from './answerType.service.collection';

import { AnswerTypeItem } from '../AnswerTypeItem/answerTypeItem';
import { QuestionaryItem } from '../QuestionaryItem/questionaryItem';


@Injectable({ providedIn: 'root' })
export class AnswerTypeService extends Service<AnswerType> implements IService<AnswerType> {

  constructor(public ServiceCollection: AnswerTypeServiceCollection) {
    super(ServiceCollection.API_Operation, AnswerType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AnswerType();
}

  RetrieveById(id: number): Promise<AnswerType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AnswerType[]> {
    return super.RetrieveAll();
  }

  Save(answerType: AnswerType): Promise<AnswerType> {
    if (!AnswerType.Validate(answerType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(answerType);
    }
    return super.Save(answerType);
  }

  SaveAttached(answerType: AnswerType): Promise<AnswerType> {
    if (!AnswerType.Validate(answerType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(answerType);
    }
    return super.SaveAttached(answerType);
  }

  SaveCollection(answerTypeList: AnswerType[]): Promise<Result> {
    return super.SaveCollection(answerTypeList);
  }

  Delete(answerType: AnswerType): Promise<boolean> {
    return super.Delete(answerType);
  }

  Seek(answerType: AnswerType = AnswerType.SeekInstance()): Promise<AnswerType[]> {
    return super.Seek(answerType);
  }

  SeekLast(answerType: AnswerType): Promise<AnswerType> {
    return super.SeekLast(answerType);
  }

  SeekByValue(value: string = ''): Promise<AnswerType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}