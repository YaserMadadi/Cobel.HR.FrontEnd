import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MaritalStatus } from './maritalStatus';
import { MaritalStatusServiceCollection } from './maritalStatus.service.collection';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class MaritalStatusService extends Service<MaritalStatus> implements IService<MaritalStatus> {

  constructor(public ServiceCollection: MaritalStatusServiceCollection) {
    super(ServiceCollection.API_Operation, MaritalStatus.Info);
  }

  CreateInstance() {
   return new MaritalStatus();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MaritalStatus> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MaritalStatus[]> {
    return super.RetrieveAll();
  }

  Save(maritalStatus: MaritalStatus): Promise<MaritalStatus> {
    if (!MaritalStatus.Validate(maritalStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(maritalStatus);
    }
    return super.Save(maritalStatus);
  }

  SaveAttached(maritalStatus: MaritalStatus): Promise<MaritalStatus> {
    if (!MaritalStatus.Validate(maritalStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(maritalStatus);
    }
    return super.SaveAttached(maritalStatus);
  }

  SaveCollection(maritalStatusList: MaritalStatus[]): Promise<Result> {
    return super.SaveCollection(maritalStatusList);
  }

  Delete(maritalStatus: MaritalStatus): Promise<boolean> {
    return super.Delete(maritalStatus);
  }

  Seek(maritalStatus: MaritalStatus = MaritalStatus.SeekInstance()): Promise<MaritalStatus[]> {
    return super.Seek(maritalStatus);
  }

  SeekLast(maritalStatus: MaritalStatus): Promise<MaritalStatus> {
    return super.SeekLast(maritalStatus);
  }

  SeekByValue(value: string = ''): Promise<MaritalStatus[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
