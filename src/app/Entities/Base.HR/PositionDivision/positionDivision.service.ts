import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PositionDivision } from './positionDivision';
import { PositionDivisionServiceCollection } from './positionDivision.service.collection';

import { Position } from '../../HR/Position/position';


@Injectable({ providedIn: 'root' })
export class PositionDivisionService extends Service<PositionDivision> implements IService<PositionDivision> {

  constructor(public ServiceCollection: PositionDivisionServiceCollection) {
    super(ServiceCollection.API_Operation, PositionDivision.Info);
  }

  CreateInstance() {
   return new PositionDivision();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PositionDivision> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PositionDivision[]> {
    return super.RetrieveAll();
  }

  Save(positionDivision: PositionDivision): Promise<PositionDivision> {
    if (!PositionDivision.Validate(positionDivision)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionDivision);
    }
    return super.Save(positionDivision);
  }

  SaveAttached(positionDivision: PositionDivision): Promise<PositionDivision> {
    if (!PositionDivision.Validate(positionDivision)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionDivision);
    }
    return super.SaveAttached(positionDivision);
  }

  SaveCollection(positionDivisionList: PositionDivision[]): Promise<Result> {
    return super.SaveCollection(positionDivisionList);
  }

  Delete(positionDivision: PositionDivision): Promise<boolean> {
    return super.Delete(positionDivision);
  }

  Seek(positionDivision: PositionDivision = PositionDivision.SeekInstance()): Promise<PositionDivision[]> {
    return super.Seek(positionDivision);
  }

  SeekLast(positionDivision: PositionDivision): Promise<PositionDivision> {
    return super.SeekLast(positionDivision);
  }

  SeekByValue(value: string = ''): Promise<PositionDivision[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
