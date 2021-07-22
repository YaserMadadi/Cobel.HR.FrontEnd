import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CriticalIncidentRecognition } from './criticalIncidentRecognition';
import { CriticalIncidentRecognitionServiceCollection } from './criticalIncidentRecognition.service.collection';

import { CriticalIncidentService } from '../CriticalIncident/criticalIncident.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class CriticalIncidentRecognitionService extends Service<CriticalIncidentRecognition> implements IService<CriticalIncidentRecognition> {

  constructor(public ServiceCollection: CriticalIncidentRecognitionServiceCollection,
		public CriticalIncidentService: CriticalIncidentService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, CriticalIncidentRecognition.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new CriticalIncidentRecognition();
}

  RetrieveById(id: number): Promise<CriticalIncidentRecognition> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CriticalIncidentRecognition[]> {
    return super.RetrieveAll();
  }

  Save(criticalIncidentRecognition: CriticalIncidentRecognition): Promise<CriticalIncidentRecognition> {
    if (!CriticalIncidentRecognition.Validate(criticalIncidentRecognition)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncidentRecognition);
    }
    return super.Save(criticalIncidentRecognition);
  }

  SaveAttached(criticalIncidentRecognition: CriticalIncidentRecognition): Promise<CriticalIncidentRecognition> {
    if (!CriticalIncidentRecognition.Validate(criticalIncidentRecognition)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(criticalIncidentRecognition);
    }
    return super.SaveAttached(criticalIncidentRecognition);
  }

  SaveCollection(criticalIncidentRecognitionList: CriticalIncidentRecognition[]): Promise<Result> {
    return super.SaveCollection(criticalIncidentRecognitionList);
  }

  Delete(criticalIncidentRecognition: CriticalIncidentRecognition): Promise<boolean> {
    return super.Delete(criticalIncidentRecognition);
  }

  Seek(criticalIncidentRecognition: CriticalIncidentRecognition = CriticalIncidentRecognition.SeekInstance()): Promise<CriticalIncidentRecognition[]> {
    return super.Seek(criticalIncidentRecognition);
  }

  SeekLast(criticalIncidentRecognition: CriticalIncidentRecognition): Promise<CriticalIncidentRecognition> {
    return super.SeekLast(criticalIncidentRecognition);
  }

  SeekByValue(value: string = ''): Promise<CriticalIncidentRecognition[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}