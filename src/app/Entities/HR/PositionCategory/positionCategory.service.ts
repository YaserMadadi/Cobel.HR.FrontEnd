import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PositionCategory } from './positionCategory';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';

import { Position } from '../Position/position';
import { Unit } from '../Unit/unit';
import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';


@Injectable({ providedIn: 'root' })
export class PositionCategoryService extends Service<PositionCategory> implements IService<PositionCategory> {

  constructor(public ServiceCollection: PositionCategoryServiceCollection) {
    super(ServiceCollection.API_Operation, PositionCategory.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new PositionCategory();
}

  RetrieveById(id: number): Promise<PositionCategory> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PositionCategory[]> {
    return super.RetrieveAll();
  }

  Save(positionCategory: PositionCategory): Promise<PositionCategory> {
    if (!PositionCategory.Validate(positionCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionCategory);
    }
    return super.Save(positionCategory);
  }

  SaveAttached(positionCategory: PositionCategory): Promise<PositionCategory> {
    if (!PositionCategory.Validate(positionCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(positionCategory);
    }
    return super.SaveAttached(positionCategory);
  }

  SaveCollection(positionCategoryList: PositionCategory[]): Promise<Result> {
    return super.SaveCollection(positionCategoryList);
  }

  Delete(positionCategory: PositionCategory): Promise<boolean> {
    return super.Delete(positionCategory);
  }

  Seek(positionCategory: PositionCategory = PositionCategory.SeekInstance()): Promise<PositionCategory[]> {
    return super.Seek(positionCategory);
  }

  SeekLast(positionCategory: PositionCategory): Promise<PositionCategory> {
    return super.SeekLast(positionCategory);
  }

  SeekByValue(value: string = ''): Promise<PositionCategory[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}