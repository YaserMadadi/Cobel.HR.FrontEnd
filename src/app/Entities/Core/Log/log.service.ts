import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Log } from './log';
import { LogServiceCollection } from './log.service.collection';

import { PersonService } from '../../HR/Person/person.service';


@Injectable({ providedIn: 'root' })
export class LogService extends Service<Log> implements IService<Log> {

  constructor(public ServiceCollection: LogServiceCollection,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, Log.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Log> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Log[]> {
    return super.RetrieveAll();
  }

  Save(log: Log): Promise<Log> {
    if (!Log.Validate(log)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(log);
    }
    return super.Save(log);
  }

  SaveAttached(log: Log): Promise<Log> {
    if (!Log.Validate(log)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(log);
    }
    return super.SaveAttached(log);
  }

  SaveCollection(logList: Log[]): Promise<Result> {
    return super.SaveCollection(logList);
  }

  Delete(log: Log): Promise<boolean> {
    return super.Delete(log);
  }

  Seek(log: Log = Log.SeekInstance()): Promise<Log[]> {
    return super.Seek(log);
  }

  SeekLast(log: Log): Promise<Log> {
    return super.SeekLast(log);
  }

  SeekByValue(value: string = ''): Promise<Log[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}