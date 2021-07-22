import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CriticalIncidentType } from './criticalIncidentType';
import { CriticalIncidentTypeServiceCollection } from './criticalIncidentType.service.collection';

import { CriticalIncident } from '../CriticalIncident/criticalIncident';


@Injectable({ providedIn: 'root' })
export class CriticalIncidentTypeService extends Service<CriticalIncidentType> implements IService<CriticalIncidentType> {

  constructor(public ServiceCollection: CriticalIncidentTypeServiceCollection) {
    super(ServiceCollection.API_Operation, CriticalIncidentType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CriticalIncidentType();
}

  RetrieveById(id: number): Promise<CriticalIncidentType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CriticalIncidentType[]> {
    return super.RetrieveAll();
  }

  Save(criticalIncidentType: CriticalIncidentType): Promise<CriticalIncidentType> {
    if (!CriticalIncidentType.Validate(criticalIncidentType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncidentType);
    }
    return super.Save(criticalIncidentType);
  }

  SaveAttached(criticalIncidentType: CriticalIncidentType): Promise<CriticalIncidentType> {
    if (!CriticalIncidentType.Validate(criticalIncidentType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncidentType);
    }
    return super.SaveAttached(criticalIncidentType);
  }

  SaveCollection(criticalIncidentTypeList: CriticalIncidentType[]): Promise<Result> {
    return super.SaveCollection(criticalIncidentTypeList);
  }

  Delete(criticalIncidentType: CriticalIncidentType): Promise<boolean> {
    return super.Delete(criticalIncidentType);
  }

  Seek(criticalIncidentType: CriticalIncidentType = CriticalIncidentType.SeekInstance()): Promise<CriticalIncidentType[]> {
    return super.Seek(criticalIncidentType);
  }

  SeekLast(criticalIncidentType: CriticalIncidentType): Promise<CriticalIncidentType> {
    return super.SeekLast(criticalIncidentType);
  }

  SeekByValue(value: string = ''): Promise<CriticalIncidentType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}