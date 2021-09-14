import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { TargetSettingType } from './targetSettingType';
import { TargetSettingTypeServiceCollection } from './targetSettingType.service.collection';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Injectable({ providedIn: 'root' })
export class TargetSettingTypeService extends Service<TargetSettingType> implements IService<TargetSettingType> {

  constructor(public ServiceCollection: TargetSettingTypeServiceCollection) {
    super(ServiceCollection.API_Operation, TargetSettingType.Info);
  }

  CreateInstance() {
   return new TargetSettingType();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<TargetSettingType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<TargetSettingType[]> {
    return super.RetrieveAll();
  }

  Save(targetSettingType: TargetSettingType): Promise<TargetSettingType> {
    if (!TargetSettingType.Validate(targetSettingType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingType);
    }
    return super.Save(targetSettingType);
  }

  SaveAttached(targetSettingType: TargetSettingType): Promise<TargetSettingType> {
    if (!TargetSettingType.Validate(targetSettingType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingType);
    }
    return super.SaveAttached(targetSettingType);
  }

  SaveCollection(targetSettingTypeList: TargetSettingType[]): Promise<Result> {
    return super.SaveCollection(targetSettingTypeList);
  }

  Delete(targetSettingType: TargetSettingType): Promise<boolean> {
    return super.Delete(targetSettingType);
  }

  Seek(targetSettingType: TargetSettingType = TargetSettingType.SeekInstance()): Promise<TargetSettingType[]> {
    return super.Seek(targetSettingType);
  }

  SeekLast(targetSettingType: TargetSettingType): Promise<TargetSettingType> {
    return super.SeekLast(targetSettingType);
  }

  SeekByValue(value: string = ''): Promise<TargetSettingType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
