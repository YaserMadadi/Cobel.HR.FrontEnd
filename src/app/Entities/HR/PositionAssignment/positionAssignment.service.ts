import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PositionAssignment } from './positionAssignment';
import { PositionAssignmentServiceCollection } from './positionAssignment.service.collection';

import { EmployeeService } from '../Employee/employee.service';
import { PositionService } from '../Position/position.service';
import { PositionAssignmentRepeal } from '../PositionAssignmentRepeal/positionAssignmentRepeal';


@Injectable({ providedIn: 'root' })
export class PositionAssignmentService extends Service<PositionAssignment> implements IService<PositionAssignment> {

  constructor(public ServiceCollection: PositionAssignmentServiceCollection,
		public EmployeeService: EmployeeService,
		public PositionService: PositionService) {
    super(ServiceCollection.API_Operation, PositionAssignment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new PositionAssignment();
}

  RetrieveById(id: number): Promise<PositionAssignment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PositionAssignment[]> {
    return super.RetrieveAll();
  }

  Save(positionAssignment: PositionAssignment): Promise<PositionAssignment> {
    if (!PositionAssignment.Validate(positionAssignment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionAssignment);
    }
    return super.Save(positionAssignment);
  }

  SaveAttached(positionAssignment: PositionAssignment): Promise<PositionAssignment> {
    if (!PositionAssignment.Validate(positionAssignment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionAssignment);
    }
    return super.SaveAttached(positionAssignment);
  }

  SaveCollection(positionAssignmentList: PositionAssignment[]): Promise<Result> {
    return super.SaveCollection(positionAssignmentList);
  }

  Delete(positionAssignment: PositionAssignment): Promise<boolean> {
    return super.Delete(positionAssignment);
  }

  Seek(positionAssignment: PositionAssignment = PositionAssignment.SeekInstance()): Promise<PositionAssignment[]> {
    return super.Seek(positionAssignment);
  }

  SeekLast(positionAssignment: PositionAssignment): Promise<PositionAssignment> {
    return super.SeekLast(positionAssignment);
  }

  SeekByValue(value: string = ''): Promise<PositionAssignment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}