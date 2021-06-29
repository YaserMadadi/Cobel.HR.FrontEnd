import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FinalApprovement } from './finalApprovement';
import { FinalApprovementServiceCollection } from './finalApprovement.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class FinalApprovementService extends Service<FinalApprovement> implements IService<FinalApprovement> {

  constructor(public ServiceCollection: FinalApprovementServiceCollection,
		public TargetSettingService: TargetSettingService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, FinalApprovement.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FinalApprovement> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FinalApprovement[]> {
    return super.RetrieveAll();
  }

  Save(finalApprovement: FinalApprovement): Promise<FinalApprovement> {
    if (!FinalApprovement.Validate(finalApprovement)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(finalApprovement);
    }
    return super.Save(finalApprovement);
  }

  SaveAttached(finalApprovement: FinalApprovement): Promise<FinalApprovement> {
    if (!FinalApprovement.Validate(finalApprovement)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(finalApprovement);
    }
    return super.SaveAttached(finalApprovement);
  }

  SaveCollection(finalApprovementList: FinalApprovement[]): Promise<Result> {
    return super.SaveCollection(finalApprovementList);
  }

  Delete(finalApprovement: FinalApprovement): Promise<boolean> {
    return super.Delete(finalApprovement);
  }

  Seek(finalApprovement: FinalApprovement = FinalApprovement.SeekInstance()): Promise<FinalApprovement[]> {
    return super.Seek(finalApprovement);
  }

  SeekLast(finalApprovement: FinalApprovement): Promise<FinalApprovement> {
    return super.SeekLast(finalApprovement);
  }

  SeekByValue(value: string = ''): Promise<FinalApprovement[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}