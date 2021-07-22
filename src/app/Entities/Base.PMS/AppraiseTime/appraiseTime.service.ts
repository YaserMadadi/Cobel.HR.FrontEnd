import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AppraiseTime } from './appraiseTime';
import { AppraiseTimeServiceCollection } from './appraiseTime.service.collection';

import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class AppraiseTimeService extends Service<AppraiseTime> implements IService<AppraiseTime> {

  constructor(public ServiceCollection: AppraiseTimeServiceCollection) {
    super(ServiceCollection.API_Operation, AppraiseTime.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AppraiseTime();
}

  RetrieveById(id: number): Promise<AppraiseTime> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AppraiseTime[]> {
    return super.RetrieveAll();
  }

  Save(appraiseTime: AppraiseTime): Promise<AppraiseTime> {
    if (!AppraiseTime.Validate(appraiseTime)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseTime);
    }
    return super.Save(appraiseTime);
  }

  SaveAttached(appraiseTime: AppraiseTime): Promise<AppraiseTime> {
    if (!AppraiseTime.Validate(appraiseTime)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseTime);
    }
    return super.SaveAttached(appraiseTime);
  }

  SaveCollection(appraiseTimeList: AppraiseTime[]): Promise<Result> {
    return super.SaveCollection(appraiseTimeList);
  }

  Delete(appraiseTime: AppraiseTime): Promise<boolean> {
    return super.Delete(appraiseTime);
  }

  Seek(appraiseTime: AppraiseTime = AppraiseTime.SeekInstance()): Promise<AppraiseTime[]> {
    return super.Seek(appraiseTime);
  }

  SeekLast(appraiseTime: AppraiseTime): Promise<AppraiseTime> {
    return super.SeekLast(appraiseTime);
  }

  SeekByValue(value: string = ''): Promise<AppraiseTime[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}