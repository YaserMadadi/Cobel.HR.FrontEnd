import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Vision } from './vision';
import { VisionServiceCollection } from './vision.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { VisionComment } from '../VisionComment/visionComment';
import { VisionApproved } from '../VisionApproved/visionApproved';
import { IndividualDevelopmentPlan } from '../IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class VisionService extends Service<Vision> implements IService<Vision> {

  constructor(public ServiceCollection: VisionServiceCollection,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, Vision.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Vision();
}

  RetrieveById(id: number): Promise<Vision> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Vision[]> {
    return super.RetrieveAll();
  }

  Save(vision: Vision): Promise<Vision> {
    if (!Vision.Validate(vision)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(vision);
    }
    return super.Save(vision);
  }

  SaveAttached(vision: Vision): Promise<Vision> {
    if (!Vision.Validate(vision)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(vision);
    }
    return super.SaveAttached(vision);
  }

  SaveCollection(visionList: Vision[]): Promise<Result> {
    return super.SaveCollection(visionList);
  }

  Delete(vision: Vision): Promise<boolean> {
    return super.Delete(vision);
  }

  Seek(vision: Vision = Vision.SeekInstance()): Promise<Vision[]> {
    return super.Seek(vision);
  }

  SeekLast(vision: Vision): Promise<Vision> {
    return super.SeekLast(vision);
  }

  SeekByValue(value: string = ''): Promise<Vision[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}