import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DevelopmentPlanType } from './developmentPlanType';
import { DevelopmentPlanTypeServiceCollection } from './developmentPlanType.service.collection';



@Injectable({ providedIn: 'root' })
export class DevelopmentPlanTypeService extends Service<DevelopmentPlanType> implements IService<DevelopmentPlanType> {

  constructor(public ServiceCollection: DevelopmentPlanTypeServiceCollection) {
    super(ServiceCollection.API_Operation, DevelopmentPlanType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<DevelopmentPlanType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DevelopmentPlanType[]> {
    return super.RetrieveAll();
  }

  Save(developmentPlanType: DevelopmentPlanType): Promise<DevelopmentPlanType> {
    if (!DevelopmentPlanType.Validate(developmentPlanType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanType);
    }
    return super.Save(developmentPlanType);
  }

  SaveAttached(developmentPlanType: DevelopmentPlanType): Promise<DevelopmentPlanType> {
    if (!DevelopmentPlanType.Validate(developmentPlanType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanType);
    }
    return super.SaveAttached(developmentPlanType);
  }

  SaveCollection(developmentPlanTypeList: DevelopmentPlanType[]): Promise<Result> {
    return super.SaveCollection(developmentPlanTypeList);
  }

  Delete(developmentPlanType: DevelopmentPlanType): Promise<boolean> {
    return super.Delete(developmentPlanType);
  }

  Seek(developmentPlanType: DevelopmentPlanType = DevelopmentPlanType.SeekInstance()): Promise<DevelopmentPlanType[]> {
    return super.Seek(developmentPlanType);
  }

  SeekLast(developmentPlanType: DevelopmentPlanType): Promise<DevelopmentPlanType> {
    return super.SeekLast(developmentPlanType);
  }

  SeekByValue(value: string = ''): Promise<DevelopmentPlanType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}