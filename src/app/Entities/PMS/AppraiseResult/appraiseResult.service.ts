import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AppraiseResult } from './appraiseResult';
import { AppraiseResultServiceCollection } from './appraiseResult.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { AppraiseTypeService } from '../../Base.PMS/AppraiseType/appraiseType.service';
import { AppraiseTimeService } from '../../Base.PMS/AppraiseTime/appraiseTime.service';


@Injectable({ providedIn: 'root' })
export class AppraiseResultService extends Service<AppraiseResult> implements IService<AppraiseResult> {

  constructor(public ServiceCollection: AppraiseResultServiceCollection,
		public TargetSettingService: TargetSettingService,
		public AppraiseTypeService: AppraiseTypeService,
		public AppraiseTimeService: AppraiseTimeService) {
    super(ServiceCollection.API_Operation, AppraiseResult.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AppraiseResult();
}

  RetrieveById(id: number): Promise<AppraiseResult> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AppraiseResult[]> {
    return super.RetrieveAll();
  }

  Save(appraiseResult: AppraiseResult): Promise<AppraiseResult> {
    if (!AppraiseResult.Validate(appraiseResult)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseResult);
    }
    return super.Save(appraiseResult);
  }

  SaveAttached(appraiseResult: AppraiseResult): Promise<AppraiseResult> {
    if (!AppraiseResult.Validate(appraiseResult)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseResult);
    }
    return super.SaveAttached(appraiseResult);
  }

  SaveCollection(appraiseResultList: AppraiseResult[]): Promise<Result> {
    return super.SaveCollection(appraiseResultList);
  }

  Delete(appraiseResult: AppraiseResult): Promise<boolean> {
    return super.Delete(appraiseResult);
  }

  Seek(appraiseResult: AppraiseResult = AppraiseResult.SeekInstance()): Promise<AppraiseResult[]> {
    return super.Seek(appraiseResult);
  }

  SeekLast(appraiseResult: AppraiseResult): Promise<AppraiseResult> {
    return super.SeekLast(appraiseResult);
  }

  SeekByValue(value: string = ''): Promise<AppraiseResult[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}