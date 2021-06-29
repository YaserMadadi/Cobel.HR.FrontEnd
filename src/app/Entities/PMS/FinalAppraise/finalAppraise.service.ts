import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FinalAppraise } from './finalAppraise';
import { FinalAppraiseServiceCollection } from './finalAppraise.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';


@Injectable({ providedIn: 'root' })
export class FinalAppraiseService extends Service<FinalAppraise> implements IService<FinalAppraise> {

  constructor(public ServiceCollection: FinalAppraiseServiceCollection,
		public TargetSettingService: TargetSettingService) {
    super(ServiceCollection.API_Operation, FinalAppraise.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FinalAppraise> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FinalAppraise[]> {
    return super.RetrieveAll();
  }

  Save(finalAppraise: FinalAppraise): Promise<FinalAppraise> {
    if (!FinalAppraise.Validate(finalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(finalAppraise);
    }
    return super.Save(finalAppraise);
  }

  SaveAttached(finalAppraise: FinalAppraise): Promise<FinalAppraise> {
    if (!FinalAppraise.Validate(finalAppraise)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(finalAppraise);
    }
    return super.SaveAttached(finalAppraise);
  }

  SaveCollection(finalAppraiseList: FinalAppraise[]): Promise<Result> {
    return super.SaveCollection(finalAppraiseList);
  }

  Delete(finalAppraise: FinalAppraise): Promise<boolean> {
    return super.Delete(finalAppraise);
  }

  Seek(finalAppraise: FinalAppraise = FinalAppraise.SeekInstance()): Promise<FinalAppraise[]> {
    return super.Seek(finalAppraise);
  }

  SeekLast(finalAppraise: FinalAppraise): Promise<FinalAppraise> {
    return super.SeekLast(finalAppraise);
  }

  SeekByValue(value: string = ''): Promise<FinalAppraise[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}