import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MilitaryServiceStatus } from './militaryServiceStatus';
import { MilitaryServiceStatusServiceCollection } from './militaryServiceStatus.service.collection';

import { MilitaryService } from '../../HR/MilitaryService/militaryService';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceStatusService extends Service<MilitaryServiceStatus> implements IService<MilitaryServiceStatus> {

  constructor(public ServiceCollection: MilitaryServiceStatusServiceCollection) {
    super(ServiceCollection.API_Operation, MilitaryServiceStatus.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MilitaryServiceStatus> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MilitaryServiceStatus[]> {
    return super.RetrieveAll();
  }

  Save(militaryServiceStatus: MilitaryServiceStatus): Promise<MilitaryServiceStatus> {
    if (!MilitaryServiceStatus.Validate(militaryServiceStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceStatus);
    }
    return super.Save(militaryServiceStatus);
  }

  SaveAttached(militaryServiceStatus: MilitaryServiceStatus): Promise<MilitaryServiceStatus> {
    if (!MilitaryServiceStatus.Validate(militaryServiceStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceStatus);
    }
    return super.SaveAttached(militaryServiceStatus);
  }

  SaveCollection(militaryServiceStatusList: MilitaryServiceStatus[]): Promise<Result> {
    return super.SaveCollection(militaryServiceStatusList);
  }

  Delete(militaryServiceStatus: MilitaryServiceStatus): Promise<boolean> {
    return super.Delete(militaryServiceStatus);
  }

  Seek(militaryServiceStatus: MilitaryServiceStatus = MilitaryServiceStatus.SeekInstance()): Promise<MilitaryServiceStatus[]> {
    return super.Seek(militaryServiceStatus);
  }

  SeekLast(militaryServiceStatus: MilitaryServiceStatus): Promise<MilitaryServiceStatus> {
    return super.SeekLast(militaryServiceStatus);
  }

  SeekByValue(value: string = ''): Promise<MilitaryServiceStatus[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}