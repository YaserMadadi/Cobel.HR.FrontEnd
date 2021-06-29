import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ApprovementType } from './approvementType';
import { ApprovementTypeServiceCollection } from './approvementType.service.collection';

import { VisionApproved } from '../../PMS/VisionApproved/visionApproved';


@Injectable({ providedIn: 'root' })
export class ApprovementTypeService extends Service<ApprovementType> implements IService<ApprovementType> {

  constructor(public ServiceCollection: ApprovementTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ApprovementType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ApprovementType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ApprovementType[]> {
    return super.RetrieveAll();
  }

  Save(approvementType: ApprovementType): Promise<ApprovementType> {
    if (!ApprovementType.Validate(approvementType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(approvementType);
    }
    return super.Save(approvementType);
  }

  SaveAttached(approvementType: ApprovementType): Promise<ApprovementType> {
    if (!ApprovementType.Validate(approvementType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(approvementType);
    }
    return super.SaveAttached(approvementType);
  }

  SaveCollection(approvementTypeList: ApprovementType[]): Promise<Result> {
    return super.SaveCollection(approvementTypeList);
  }

  Delete(approvementType: ApprovementType): Promise<boolean> {
    return super.Delete(approvementType);
  }

  Seek(approvementType: ApprovementType = ApprovementType.SeekInstance()): Promise<ApprovementType[]> {
    return super.Seek(approvementType);
  }

  SeekLast(approvementType: ApprovementType): Promise<ApprovementType> {
    return super.SeekLast(approvementType);
  }

  SeekByValue(value: string = ''): Promise<ApprovementType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}