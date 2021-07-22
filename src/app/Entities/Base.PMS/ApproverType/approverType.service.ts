import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ApproverType } from './approverType';
import { ApproverTypeServiceCollection } from './approverType.service.collection';

import { AppraisalApproverConfig } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig';


@Injectable({ providedIn: 'root' })
export class ApproverTypeService extends Service<ApproverType> implements IService<ApproverType> {

  constructor(public ServiceCollection: ApproverTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ApproverType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ApproverType();
}

  RetrieveById(id: number): Promise<ApproverType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ApproverType[]> {
    return super.RetrieveAll();
  }

  Save(approverType: ApproverType): Promise<ApproverType> {
    if (!ApproverType.Validate(approverType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(approverType);
    }
    return super.Save(approverType);
  }

  SaveAttached(approverType: ApproverType): Promise<ApproverType> {
    if (!ApproverType.Validate(approverType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(approverType);
    }
    return super.SaveAttached(approverType);
  }

  SaveCollection(approverTypeList: ApproverType[]): Promise<Result> {
    return super.SaveCollection(approverTypeList);
  }

  Delete(approverType: ApproverType): Promise<boolean> {
    return super.Delete(approverType);
  }

  Seek(approverType: ApproverType = ApproverType.SeekInstance()): Promise<ApproverType[]> {
    return super.Seek(approverType);
  }

  SeekLast(approverType: ApproverType): Promise<ApproverType> {
    return super.SeekLast(approverType);
  }

  SeekByValue(value: string = ''): Promise<ApproverType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}