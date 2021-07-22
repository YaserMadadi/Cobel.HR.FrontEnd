import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CriticalIncident } from './criticalIncident';
import { CriticalIncidentServiceCollection } from './criticalIncident.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { CriticalIncidentTypeService } from '../CriticalIncidentType/criticalIncidentType.service';
import { CriticalIncidentRecognition } from '../CriticalIncidentRecognition/criticalIncidentRecognition';


@Injectable({ providedIn: 'root' })
export class CriticalIncidentService extends Service<CriticalIncident> implements IService<CriticalIncident> {

  constructor(public ServiceCollection: CriticalIncidentServiceCollection,
		public EmployeeService: EmployeeService,
		public CriticalIncidentTypeService: CriticalIncidentTypeService) {
    super(ServiceCollection.API_Operation, CriticalIncident.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CriticalIncident();
}

  RetrieveById(id: number): Promise<CriticalIncident> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CriticalIncident[]> {
    return super.RetrieveAll();
  }

  Save(criticalIncident: CriticalIncident): Promise<CriticalIncident> {
    if (!CriticalIncident.Validate(criticalIncident)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncident);
    }
    return super.Save(criticalIncident);
  }

  SaveAttached(criticalIncident: CriticalIncident): Promise<CriticalIncident> {
    if (!CriticalIncident.Validate(criticalIncident)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncident);
    }
    return super.SaveAttached(criticalIncident);
  }

  SaveCollection(criticalIncidentList: CriticalIncident[]): Promise<Result> {
    return super.SaveCollection(criticalIncidentList);
  }

  Delete(criticalIncident: CriticalIncident): Promise<boolean> {
    return super.Delete(criticalIncident);
  }

  Seek(criticalIncident: CriticalIncident = CriticalIncident.SeekInstance()): Promise<CriticalIncident[]> {
    return super.Seek(criticalIncident);
  }

  SeekLast(criticalIncident: CriticalIncident): Promise<CriticalIncident> {
    return super.SeekLast(criticalIncident);
  }

  SeekByValue(value: string = ''): Promise<CriticalIncident[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}