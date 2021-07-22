import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EmploymentStatus } from './employmentStatus';
import { EmploymentStatusServiceCollection } from './employmentStatus.service.collection';

import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';
import { Employee } from '../../HR/Employee/employee';


@Injectable({ providedIn: 'root' })
export class EmploymentStatusService extends Service<EmploymentStatus> implements IService<EmploymentStatus> {

  constructor(public ServiceCollection: EmploymentStatusServiceCollection) {
    super(ServiceCollection.API_Operation, EmploymentStatus.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new EmploymentStatus();
}

  RetrieveById(id: number): Promise<EmploymentStatus> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EmploymentStatus[]> {
    return super.RetrieveAll();
  }

  Save(employmentStatus: EmploymentStatus): Promise<EmploymentStatus> {
    if (!EmploymentStatus.Validate(employmentStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employmentStatus);
    }
    return super.Save(employmentStatus);
  }

  SaveAttached(employmentStatus: EmploymentStatus): Promise<EmploymentStatus> {
    if (!EmploymentStatus.Validate(employmentStatus)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employmentStatus);
    }
    return super.SaveAttached(employmentStatus);
  }

  SaveCollection(employmentStatusList: EmploymentStatus[]): Promise<Result> {
    return super.SaveCollection(employmentStatusList);
  }

  Delete(employmentStatus: EmploymentStatus): Promise<boolean> {
    return super.Delete(employmentStatus);
  }

  Seek(employmentStatus: EmploymentStatus = EmploymentStatus.SeekInstance()): Promise<EmploymentStatus[]> {
    return super.Seek(employmentStatus);
  }

  SeekLast(employmentStatus: EmploymentStatus): Promise<EmploymentStatus> {
    return super.SeekLast(employmentStatus);
  }

  SeekByValue(value: string = ''): Promise<EmploymentStatus[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}