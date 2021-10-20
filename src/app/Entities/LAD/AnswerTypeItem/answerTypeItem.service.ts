import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AnswerTypeItem } from './answerTypeItem';
import { AnswerTypeItemServiceCollection } from './answerTypeItem.service.collection';

import { AnswerTypeService } from '../AnswerType/answerType.service';


@Injectable({ providedIn: 'root' })
export class AnswerTypeItemService extends Service<AnswerTypeItem> implements IService<AnswerTypeItem> {

  constructor(public ServiceCollection: AnswerTypeItemServiceCollection,
		public AnswerTypeService: AnswerTypeService) {
    super(ServiceCollection.API_Operation, AnswerTypeItem.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AnswerTypeItem();
}

  RetrieveById(id: number): Promise<AnswerTypeItem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AnswerTypeItem[]> {
    return super.RetrieveAll();
  }

  Save(answerTypeItem: AnswerTypeItem): Promise<AnswerTypeItem> {
    if (!AnswerTypeItem.Validate(answerTypeItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(answerTypeItem);
    }
    return super.Save(answerTypeItem);
  }

  SaveAttached(answerTypeItem: AnswerTypeItem): Promise<AnswerTypeItem> {
    if (!AnswerTypeItem.Validate(answerTypeItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(answerTypeItem);
    }
    return super.SaveAttached(answerTypeItem);
  }

  SaveCollection(answerTypeItemList: AnswerTypeItem[]): Promise<Result> {
    return super.SaveCollection(answerTypeItemList);
  }

  Delete(answerTypeItem: AnswerTypeItem): Promise<boolean> {
    return super.Delete(answerTypeItem);
  }

  Seek(answerTypeItem: AnswerTypeItem = AnswerTypeItem.SeekInstance()): Promise<AnswerTypeItem[]> {
    return super.Seek(answerTypeItem);
  }

  SeekLast(answerTypeItem: AnswerTypeItem): Promise<AnswerTypeItem> {
    return super.SeekLast(answerTypeItem);
  }

  SeekByValue(value: string = ''): Promise<AnswerTypeItem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}