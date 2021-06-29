import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Religion } from './religion';
import { ReligionServiceCollection } from './religion.service.collection';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class ReligionService extends Service<Religion> implements IService<Religion> {

  constructor(public ServiceCollection: ReligionServiceCollection) {
    super(ServiceCollection.API_Operation, Religion.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Religion> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Religion[]> {
    return super.RetrieveAll();
  }

  Save(religion: Religion): Promise<Religion> {
    if (!Religion.Validate(religion)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(religion);
    }
    return super.Save(religion);
  }

  SaveAttached(religion: Religion): Promise<Religion> {
    if (!Religion.Validate(religion)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(religion);
    }
    return super.SaveAttached(religion);
  }

  SaveCollection(religionList: Religion[]): Promise<Result> {
    return super.SaveCollection(religionList);
  }

  Delete(religion: Religion): Promise<boolean> {
    return super.Delete(religion);
  }

  Seek(religion: Religion = Religion.SeekInstance()): Promise<Religion[]> {
    return super.Seek(religion);
  }

  SeekLast(religion: Religion): Promise<Religion> {
    return super.SeekLast(religion);
  }

  SeekByValue(value: string = ''): Promise<Religion[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}