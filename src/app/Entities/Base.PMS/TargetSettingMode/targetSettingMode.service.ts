import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { TargetSettingMode } from './targetSettingMode';
import { TargetSettingModeServiceCollection } from './targetSettingMode.service.collection';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Injectable({ providedIn: 'root' })
export class TargetSettingModeService extends Service<TargetSettingMode> implements IService<TargetSettingMode> {

  constructor(public ServiceCollection: TargetSettingModeServiceCollection) {
    super(ServiceCollection.API_Operation, TargetSettingMode.Info);
  }

  CreateInstance() {
   return new TargetSettingMode();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<TargetSettingMode> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<TargetSettingMode[]> {
    return super.RetrieveAll();
  }

  Save(targetSettingMode: TargetSettingMode): Promise<TargetSettingMode> {
    if (!TargetSettingMode.Validate(targetSettingMode)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingMode);
    }
    return super.Save(targetSettingMode);
  }

  SaveAttached(targetSettingMode: TargetSettingMode): Promise<TargetSettingMode> {
    if (!TargetSettingMode.Validate(targetSettingMode)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(targetSettingMode);
    }
    return super.SaveAttached(targetSettingMode);
  }

  SaveCollection(targetSettingModeList: TargetSettingMode[]): Promise<Result> {
    return super.SaveCollection(targetSettingModeList);
  }

  Delete(targetSettingMode: TargetSettingMode): Promise<boolean> {
    return super.Delete(targetSettingMode);
  }

  Seek(targetSettingMode: TargetSettingMode = TargetSettingMode.SeekInstance()): Promise<TargetSettingMode[]> {
    return super.Seek(targetSettingMode);
  }

  SeekLast(targetSettingMode: TargetSettingMode): Promise<TargetSettingMode> {
    return super.SeekLast(targetSettingMode);
  }

  SeekByValue(value: string = ''): Promise<TargetSettingMode[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
