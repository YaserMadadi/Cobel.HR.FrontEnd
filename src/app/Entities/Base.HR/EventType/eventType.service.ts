import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EventType } from './eventType';
import { EventTypeServiceCollection } from './eventType.service.collection';

import { EmployeeEvent } from '../../HR/EmployeeEvent/employeeEvent';


@Injectable({ providedIn: 'root' })
export class EventTypeService extends Service<EventType> implements IService<EventType> {

  constructor(public ServiceCollection: EventTypeServiceCollection) {
    super(ServiceCollection.API_Operation, EventType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<EventType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EventType[]> {
    return super.RetrieveAll();
  }

  Save(eventType: EventType): Promise<EventType> {
    if (!EventType.Validate(eventType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(eventType);
    }
    return super.Save(eventType);
  }

  SaveAttached(eventType: EventType): Promise<EventType> {
    if (!EventType.Validate(eventType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(eventType);
    }
    return super.SaveAttached(eventType);
  }

  SaveCollection(eventTypeList: EventType[]): Promise<Result> {
    return super.SaveCollection(eventTypeList);
  }

  Delete(eventType: EventType): Promise<boolean> {
    return super.Delete(eventType);
  }

  Seek(eventType: EventType = EventType.SeekInstance()): Promise<EventType[]> {
    return super.Seek(eventType);
  }

  SeekLast(eventType: EventType): Promise<EventType> {
    return super.SeekLast(eventType);
  }

  SeekByValue(value: string = ''): Promise<EventType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}