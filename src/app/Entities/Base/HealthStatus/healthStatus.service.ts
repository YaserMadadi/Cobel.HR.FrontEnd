import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { HealthStatus } from './healthStatus';
import { HealthStatusServiceCollection } from './healthStatus.service.collection';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class HealthStatusService extends Service<HealthStatus> implements IService<HealthStatus> {

  constructor(public ServiceCollection: HealthStatusServiceCollection) {
    super(ServiceCollection.API_Operation, HealthStatus.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new HealthStatus();
}

  RetrieveById(id: number): Promise<HealthStatus> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<HealthStatus[]> {
    return super.RetrieveAll();
  }

  Save(healthStatus: HealthStatus): Promise<HealthStatus> {
    if (!HealthStatus.Validate(healthStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(healthStatus);
    }
    return super.Save(healthStatus);
  }

  SaveAttached(healthStatus: HealthStatus): Promise<HealthStatus> {
    if (!HealthStatus.Validate(healthStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(healthStatus);
    }
    return super.SaveAttached(healthStatus);
  }

  SaveCollection(healthStatusList: HealthStatus[]): Promise<Result> {
    return super.SaveCollection(healthStatusList);
  }

  Delete(healthStatus: HealthStatus): Promise<boolean> {
    return super.Delete(healthStatus);
  }

  Seek(healthStatus: HealthStatus = HealthStatus.SeekInstance()): Promise<HealthStatus[]> {
    return super.Seek(healthStatus);
  }

  SeekLast(healthStatus: HealthStatus): Promise<HealthStatus> {
    return super.SeekLast(healthStatus);
  }

  SeekByValue(value: string = ''): Promise<HealthStatus[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}