import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CommandParameter } from './commandParameter';
import { CommandParameterServiceCollection } from './commandParameter.service.collection';

import { ExceptionLogService } from '../ExceptionLog/exceptionLog.service';


@Injectable({ providedIn: 'root' })
export class CommandParameterService extends Service<CommandParameter> implements IService<CommandParameter> {

  constructor(public ServiceCollection: CommandParameterServiceCollection,
		public ExceptionLogService: ExceptionLogService) {
    super(ServiceCollection.API_Operation, CommandParameter.Info);
  }

  CreateInstance() {
   return new CommandParameter();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CommandParameter> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CommandParameter[]> {
    return super.RetrieveAll();
  }

  Save(commandParameter: CommandParameter): Promise<CommandParameter> {
    if (!CommandParameter.Validate(commandParameter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(commandParameter);
    }
    return super.Save(commandParameter);
  }

  SaveAttached(commandParameter: CommandParameter): Promise<CommandParameter> {
    if (!CommandParameter.Validate(commandParameter)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(commandParameter);
    }
    return super.SaveAttached(commandParameter);
  }

  SaveCollection(commandParameterList: CommandParameter[]): Promise<Result> {
    return super.SaveCollection(commandParameterList);
  }

  Delete(commandParameter: CommandParameter): Promise<boolean> {
    return super.Delete(commandParameter);
  }

  Seek(commandParameter: CommandParameter = CommandParameter.SeekInstance()): Promise<CommandParameter[]> {
    return super.Seek(commandParameter);
  }

  SeekLast(commandParameter: CommandParameter): Promise<CommandParameter> {
    return super.SeekLast(commandParameter);
  }

  SeekByValue(value: string = ''): Promise<CommandParameter[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
