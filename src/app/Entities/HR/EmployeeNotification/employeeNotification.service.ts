import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EmployeeNotification } from './employeeNotification';
import { EmployeeNotificationServiceCollection } from './employeeNotification.service.collection';

import { EmployeeService } from '../Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class EmployeeNotificationService extends Service<EmployeeNotification> implements IService<EmployeeNotification> {

  constructor(public ServiceCollection: EmployeeNotificationServiceCollection,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, EmployeeNotification.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new EmployeeNotification();
}

  RetrieveById(id: number): Promise<EmployeeNotification> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EmployeeNotification[]> {
    return super.RetrieveAll();
  }

  Save(employeeNotification: EmployeeNotification): Promise<EmployeeNotification> {
    if (!EmployeeNotification.Validate(employeeNotification)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeNotification);
    }
    return super.Save(employeeNotification);
  }

  SaveAttached(employeeNotification: EmployeeNotification): Promise<EmployeeNotification> {
    if (!EmployeeNotification.Validate(employeeNotification)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeNotification);
    }
    return super.SaveAttached(employeeNotification);
  }

  SaveCollection(employeeNotificationList: EmployeeNotification[]): Promise<Result> {
    return super.SaveCollection(employeeNotificationList);
  }

  Delete(employeeNotification: EmployeeNotification): Promise<boolean> {
    return super.Delete(employeeNotification);
  }

  Seek(employeeNotification: EmployeeNotification = EmployeeNotification.SeekInstance()): Promise<EmployeeNotification[]> {
    return super.Seek(employeeNotification);
  }

  SeekLast(employeeNotification: EmployeeNotification): Promise<EmployeeNotification> {
    return super.SeekLast(employeeNotification);
  }

  SeekByValue(value: string = ''): Promise<EmployeeNotification[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}