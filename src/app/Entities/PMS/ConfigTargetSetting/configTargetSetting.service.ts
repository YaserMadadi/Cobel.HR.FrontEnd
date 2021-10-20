import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ConfigTargetSetting } from './configTargetSetting';
import { ConfigTargetSettingServiceCollection } from './configTargetSetting.service.collection';

import { PositionCategoryService } from '../../Base.HR/PositionCategory/positionCategory.service';
import { ConfigQualitativeObjective } from '../ConfigQualitativeObjective/configQualitativeObjective';


@Injectable({ providedIn: 'root' })
export class ConfigTargetSettingService extends Service<ConfigTargetSetting> implements IService<ConfigTargetSetting> {

  constructor(public ServiceCollection: ConfigTargetSettingServiceCollection,
		public positionCategoryService: PositionCategoryService) {
    super(ServiceCollection.API_Operation, ConfigTargetSetting.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ConfigTargetSetting();
}

  RetrieveById(id: number): Promise<ConfigTargetSetting> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ConfigTargetSetting[]> {
    return super.RetrieveAll();
  }

  Save(configTargetSetting: ConfigTargetSetting): Promise<ConfigTargetSetting> {
    if (!ConfigTargetSetting.Validate(configTargetSetting)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configTargetSetting);
    }
    return super.Save(configTargetSetting);
  }

  SaveAttached(configTargetSetting: ConfigTargetSetting): Promise<ConfigTargetSetting> {
    if (!ConfigTargetSetting.Validate(configTargetSetting)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configTargetSetting);
    }
    return super.SaveAttached(configTargetSetting);
  }

  SaveCollection(configTargetSettingList: ConfigTargetSetting[]): Promise<Result> {
    return super.SaveCollection(configTargetSettingList);
  }

  Delete(configTargetSetting: ConfigTargetSetting): Promise<boolean> {
    return super.Delete(configTargetSetting);
  }

  Seek(configTargetSetting: ConfigTargetSetting = ConfigTargetSetting.SeekInstance()): Promise<ConfigTargetSetting[]> {
    return super.Seek(configTargetSetting);
  }

  SeekLast(configTargetSetting: ConfigTargetSetting): Promise<ConfigTargetSetting> {
    return super.SeekLast(configTargetSetting);
  }

  SeekByValue(value: string = ''): Promise<ConfigTargetSetting[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}