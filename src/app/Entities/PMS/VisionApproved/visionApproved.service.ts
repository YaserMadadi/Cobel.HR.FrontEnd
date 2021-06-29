import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { VisionApproved } from './visionApproved';
import { VisionApprovedServiceCollection } from './visionApproved.service.collection';

import { VisionService } from '../Vision/vision.service';
import { EmployeeService } from '../../HR/Employee/employee.service';
import { ApprovementTypeService } from '../../Base.PMS/ApprovementType/approvementType.service';


@Injectable({ providedIn: 'root' })
export class VisionApprovedService extends Service<VisionApproved> implements IService<VisionApproved> {

  constructor(public ServiceCollection: VisionApprovedServiceCollection,
		public VisionService: VisionService,
		public EmployeeService: EmployeeService,
		public ApprovementTypeService: ApprovementTypeService) {
    super(ServiceCollection.API_Operation, VisionApproved.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<VisionApproved> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<VisionApproved[]> {
    return super.RetrieveAll();
  }

  Save(visionApproved: VisionApproved): Promise<VisionApproved> {
    if (!VisionApproved.Validate(visionApproved)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(visionApproved);
    }
    return super.Save(visionApproved);
  }

  SaveAttached(visionApproved: VisionApproved): Promise<VisionApproved> {
    if (!VisionApproved.Validate(visionApproved)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(visionApproved);
    }
    return super.SaveAttached(visionApproved);
  }

  SaveCollection(visionApprovedList: VisionApproved[]): Promise<Result> {
    return super.SaveCollection(visionApprovedList);
  }

  Delete(visionApproved: VisionApproved): Promise<boolean> {
    return super.Delete(visionApproved);
  }

  Seek(visionApproved: VisionApproved = VisionApproved.SeekInstance()): Promise<VisionApproved[]> {
    return super.Seek(visionApproved);
  }

  SeekLast(visionApproved: VisionApproved): Promise<VisionApproved> {
    return super.SeekLast(visionApproved);
  }

  SeekByValue(value: string = ''): Promise<VisionApproved[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}