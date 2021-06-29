import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EmployeeEvent } from './employeeEvent';
import { EmployeeEventServiceCollection } from './employeeEvent.service.collection';

import { EmployeeService } from '../Employee/employee.service';
import { EventTypeService } from '../../Base.HR/EventType/eventType.service';


@Injectable({ providedIn: 'root' })
export class EmployeeEventService extends Service<EmployeeEvent> implements IService<EmployeeEvent> {

  constructor(public ServiceCollection: EmployeeEventServiceCollection,
		public EmployeeService: EmployeeService,
		public EventTypeService: EventTypeService) {
    super(ServiceCollection.API_Operation, EmployeeEvent.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<EmployeeEvent> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EmployeeEvent[]> {
    return super.RetrieveAll();
  }

  Save(employeeEvent: EmployeeEvent): Promise<EmployeeEvent> {
    if (!EmployeeEvent.Validate(employeeEvent)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeEvent);
    }
    return super.Save(employeeEvent);
  }

  SaveAttached(employeeEvent: EmployeeEvent): Promise<EmployeeEvent> {
    if (!EmployeeEvent.Validate(employeeEvent)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeEvent);
    }
    return super.SaveAttached(employeeEvent);
  }

  SaveCollection(employeeEventList: EmployeeEvent[]): Promise<Result> {
    return super.SaveCollection(employeeEventList);
  }

  Delete(employeeEvent: EmployeeEvent): Promise<boolean> {
    return super.Delete(employeeEvent);
  }

  Seek(employeeEvent: EmployeeEvent = EmployeeEvent.SeekInstance()): Promise<EmployeeEvent[]> {
    return super.Seek(employeeEvent);
  }

  SeekLast(employeeEvent: EmployeeEvent): Promise<EmployeeEvent> {
    return super.SeekLast(employeeEvent);
  }

  SeekByValue(value: string = ''): Promise<EmployeeEvent[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}