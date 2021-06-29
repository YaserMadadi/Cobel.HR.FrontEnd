import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PositionAssignmentRepeal } from './positionAssignmentRepeal';
import { PositionAssignmentRepealServiceCollection } from './positionAssignmentRepeal.service.collection';

import { PositionAssignmentService } from '../PositionAssignment/positionAssignment.service';


@Injectable({ providedIn: 'root' })
export class PositionAssignmentRepealService extends Service<PositionAssignmentRepeal> implements IService<PositionAssignmentRepeal> {

  constructor(public ServiceCollection: PositionAssignmentRepealServiceCollection,
		public PositionAssignmentService: PositionAssignmentService) {
    super(ServiceCollection.API_Operation, PositionAssignmentRepeal.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PositionAssignmentRepeal> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PositionAssignmentRepeal[]> {
    return super.RetrieveAll();
  }

  Save(positionAssignmentRepeal: PositionAssignmentRepeal): Promise<PositionAssignmentRepeal> {
    if (!PositionAssignmentRepeal.Validate(positionAssignmentRepeal)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionAssignmentRepeal);
    }
    return super.Save(positionAssignmentRepeal);
  }

  SaveAttached(positionAssignmentRepeal: PositionAssignmentRepeal): Promise<PositionAssignmentRepeal> {
    if (!PositionAssignmentRepeal.Validate(positionAssignmentRepeal)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionAssignmentRepeal);
    }
    return super.SaveAttached(positionAssignmentRepeal);
  }

  SaveCollection(positionAssignmentRepealList: PositionAssignmentRepeal[]): Promise<Result> {
    return super.SaveCollection(positionAssignmentRepealList);
  }

  Delete(positionAssignmentRepeal: PositionAssignmentRepeal): Promise<boolean> {
    return super.Delete(positionAssignmentRepeal);
  }

  Seek(positionAssignmentRepeal: PositionAssignmentRepeal = PositionAssignmentRepeal.SeekInstance()): Promise<PositionAssignmentRepeal[]> {
    return super.Seek(positionAssignmentRepeal);
  }

  SeekLast(positionAssignmentRepeal: PositionAssignmentRepeal): Promise<PositionAssignmentRepeal> {
    return super.SeekLast(positionAssignmentRepeal);
  }

  SeekByValue(value: string = ''): Promise<PositionAssignmentRepeal[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}