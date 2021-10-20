import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AppraiseType } from './appraiseType';
import { AppraiseTypeServiceCollection } from './appraiseType.service.collection';

import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class AppraiseTypeService extends Service<AppraiseType> implements IService<AppraiseType> {

  constructor(public ServiceCollection: AppraiseTypeServiceCollection) {
    super(ServiceCollection.API_Operation, AppraiseType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new AppraiseType();
}

  RetrieveById(id: number): Promise<AppraiseType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AppraiseType[]> {
    return super.RetrieveAll();
  }

  Save(appraiseType: AppraiseType): Promise<AppraiseType> {
    if (!AppraiseType.Validate(appraiseType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseType);
    }
    return super.Save(appraiseType);
  }

  SaveAttached(appraiseType: AppraiseType): Promise<AppraiseType> {
    if (!AppraiseType.Validate(appraiseType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(appraiseType);
    }
    return super.SaveAttached(appraiseType);
  }

  SaveCollection(appraiseTypeList: AppraiseType[]): Promise<Result> {
    return super.SaveCollection(appraiseTypeList);
  }

  Delete(appraiseType: AppraiseType): Promise<boolean> {
    return super.Delete(appraiseType);
  }

  Seek(appraiseType: AppraiseType = AppraiseType.SeekInstance()): Promise<AppraiseType[]> {
    return super.Seek(appraiseType);
  }

  SeekLast(appraiseType: AppraiseType): Promise<AppraiseType> {
    return super.SeekLast(appraiseType);
  }

  SeekByValue(value: string = ''): Promise<AppraiseType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}