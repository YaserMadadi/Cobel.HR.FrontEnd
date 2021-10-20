import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ExpectedLevel } from './expectedLevel';
import { ExpectedLevelServiceCollection } from './expectedLevel.service.collection';

import { BehavioralObjective } from '../../PMS/BehavioralObjective/behavioralObjective';


@Injectable({ providedIn: 'root' })
export class ExpectedLevelService extends Service<ExpectedLevel> implements IService<ExpectedLevel> {

  constructor(public ServiceCollection: ExpectedLevelServiceCollection) {
    super(ServiceCollection.API_Operation, ExpectedLevel.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ExpectedLevel();
}

  RetrieveById(id: number): Promise<ExpectedLevel> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ExpectedLevel[]> {
    return super.RetrieveAll();
  }

  Save(expectedLevel: ExpectedLevel): Promise<ExpectedLevel> {
    if (!ExpectedLevel.Validate(expectedLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(expectedLevel);
    }
    return super.Save(expectedLevel);
  }

  SaveAttached(expectedLevel: ExpectedLevel): Promise<ExpectedLevel> {
    if (!ExpectedLevel.Validate(expectedLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(expectedLevel);
    }
    return super.SaveAttached(expectedLevel);
  }

  SaveCollection(expectedLevelList: ExpectedLevel[]): Promise<Result> {
    return super.SaveCollection(expectedLevelList);
  }

  Delete(expectedLevel: ExpectedLevel): Promise<boolean> {
    return super.Delete(expectedLevel);
  }

  Seek(expectedLevel: ExpectedLevel = ExpectedLevel.SeekInstance()): Promise<ExpectedLevel[]> {
    return super.Seek(expectedLevel);
  }

  SeekLast(expectedLevel: ExpectedLevel): Promise<ExpectedLevel> {
    return super.SeekLast(expectedLevel);
  }

  SeekByValue(value: string = ''): Promise<ExpectedLevel[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}