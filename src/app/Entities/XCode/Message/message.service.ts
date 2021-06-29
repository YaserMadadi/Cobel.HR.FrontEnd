import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Message } from './message';
import { MessageServiceCollection } from './message.service.collection';



@Injectable({ providedIn: 'root' })
export class MessageService extends Service<Message> implements IService<Message> {

  constructor(public ServiceCollection: MessageServiceCollection) {
    super(ServiceCollection.API_Operation, Message.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Message> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Message[]> {
    return super.RetrieveAll();
  }

  Save(message: Message): Promise<Message> {
    if (!Message.Validate(message)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(message);
    }
    return super.Save(message);
  }

  SaveAttached(message: Message): Promise<Message> {
    if (!Message.Validate(message)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(message);
    }
    return super.SaveAttached(message);
  }

  SaveCollection(messageList: Message[]): Promise<Result> {
    return super.SaveCollection(messageList);
  }

  Delete(message: Message): Promise<boolean> {
    return super.Delete(message);
  }

  Seek(message: Message = Message.SeekInstance()): Promise<Message[]> {
    return super.Seek(message);
  }

  SeekLast(message: Message): Promise<Message> {
    return super.SeekLast(message);
  }

  SeekByValue(value: string = ''): Promise<Message[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}