import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ExceptionLog } from './exceptionLog';
import { ExceptionLogServiceCollection } from './exceptionLog.service.collection';

import { CommandParameter } from '../CommandParameter/commandParameter';


@Injectable({ providedIn: 'root' })
export class ExceptionLogService extends Service<ExceptionLog> implements IService<ExceptionLog> {

  constructor(public ServiceCollection: ExceptionLogServiceCollection) {
    super(ServiceCollection.API_Operation, ExceptionLog.Info);
  }

  CreateInstance() {
   return new ExceptionLog();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ExceptionLog> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ExceptionLog[]> {
    return super.RetrieveAll();
  }

  Save(exceptionLog: ExceptionLog): Promise<ExceptionLog> {
    if (!ExceptionLog.Validate(exceptionLog)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(exceptionLog);
    }
    return super.Save(exceptionLog);
  }

  SaveAttached(exceptionLog: ExceptionLog): Promise<ExceptionLog> {
    if (!ExceptionLog.Validate(exceptionLog)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(exceptionLog);
    }
    return super.SaveAttached(exceptionLog);
  }

  SaveCollection(exceptionLogList: ExceptionLog[]): Promise<Result> {
    return super.SaveCollection(exceptionLogList);
  }

  Delete(exceptionLog: ExceptionLog): Promise<boolean> {
    return super.Delete(exceptionLog);
  }

  Seek(exceptionLog: ExceptionLog = ExceptionLog.SeekInstance()): Promise<ExceptionLog[]> {
    return super.Seek(exceptionLog);
  }

  SeekLast(exceptionLog: ExceptionLog): Promise<ExceptionLog> {
    return super.SeekLast(exceptionLog);
  }

  SeekByValue(value: string = ''): Promise<ExceptionLog[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
