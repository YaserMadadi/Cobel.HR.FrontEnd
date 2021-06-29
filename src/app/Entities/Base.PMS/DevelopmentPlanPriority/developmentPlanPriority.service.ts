import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DevelopmentPlanPriority } from './developmentPlanPriority';
import { DevelopmentPlanPriorityServiceCollection } from './developmentPlanPriority.service.collection';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class DevelopmentPlanPriorityService extends Service<DevelopmentPlanPriority> implements IService<DevelopmentPlanPriority> {

  constructor(public ServiceCollection: DevelopmentPlanPriorityServiceCollection) {
    super(ServiceCollection.API_Operation, DevelopmentPlanPriority.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<DevelopmentPlanPriority> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DevelopmentPlanPriority[]> {
    return super.RetrieveAll();
  }

  Save(developmentPlanPriority: DevelopmentPlanPriority): Promise<DevelopmentPlanPriority> {
    if (!DevelopmentPlanPriority.Validate(developmentPlanPriority)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanPriority);
    }
    return super.Save(developmentPlanPriority);
  }

  SaveAttached(developmentPlanPriority: DevelopmentPlanPriority): Promise<DevelopmentPlanPriority> {
    if (!DevelopmentPlanPriority.Validate(developmentPlanPriority)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanPriority);
    }
    return super.SaveAttached(developmentPlanPriority);
  }

  SaveCollection(developmentPlanPriorityList: DevelopmentPlanPriority[]): Promise<Result> {
    return super.SaveCollection(developmentPlanPriorityList);
  }

  Delete(developmentPlanPriority: DevelopmentPlanPriority): Promise<boolean> {
    return super.Delete(developmentPlanPriority);
  }

  Seek(developmentPlanPriority: DevelopmentPlanPriority = DevelopmentPlanPriority.SeekInstance()): Promise<DevelopmentPlanPriority[]> {
    return super.Seek(developmentPlanPriority);
  }

  SeekLast(developmentPlanPriority: DevelopmentPlanPriority): Promise<DevelopmentPlanPriority> {
    return super.SeekLast(developmentPlanPriority);
  }

  SeekByValue(value: string = ''): Promise<DevelopmentPlanPriority[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}