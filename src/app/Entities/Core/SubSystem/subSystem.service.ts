import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { SubSystem } from './subSystem';
import { SubSystemServiceCollection } from './subSystem.service.collection';

import { Menu } from '../Menu/menu';


@Injectable({ providedIn: 'root' })
export class SubSystemService extends Service<SubSystem> implements IService<SubSystem> {

  constructor(public ServiceCollection: SubSystemServiceCollection) {
    super(ServiceCollection.API_Operation, SubSystem.Info);
  }

  CreateInstance() {
   return new SubSystem();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<SubSystem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<SubSystem[]> {
    return super.RetrieveAll();
  }

  Save(subSystem: SubSystem): Promise<SubSystem> {
    if (!SubSystem.Validate(subSystem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(subSystem);
    }
    return super.Save(subSystem);
  }

  SaveAttached(subSystem: SubSystem): Promise<SubSystem> {
    if (!SubSystem.Validate(subSystem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(subSystem);
    }
    return super.SaveAttached(subSystem);
  }

  SaveCollection(subSystemList: SubSystem[]): Promise<Result> {
    return super.SaveCollection(subSystemList);
  }

  Delete(subSystem: SubSystem): Promise<boolean> {
    return super.Delete(subSystem);
  }

  Seek(subSystem: SubSystem = SubSystem.SeekInstance()): Promise<SubSystem[]> {
    return super.Seek(subSystem);
  }

  SeekLast(subSystem: SubSystem): Promise<SubSystem> {
    return super.SeekLast(subSystem);
  }

  SeekByValue(value: string = ''): Promise<SubSystem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
