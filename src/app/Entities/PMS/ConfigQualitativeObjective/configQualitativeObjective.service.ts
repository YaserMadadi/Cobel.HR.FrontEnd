import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ConfigQualitativeObjective } from './configQualitativeObjective';
import { ConfigQualitativeObjectiveServiceCollection } from './configQualitativeObjective.service.collection';

import { ConfigTargetSettingService } from '../ConfigTargetSetting/configTargetSetting.service';
import { ConfigQualitativeKPI } from '../ConfigQualitativeKPI/configQualitativeKPI';


@Injectable({ providedIn: 'root' })
export class ConfigQualitativeObjectiveService extends Service<ConfigQualitativeObjective> implements IService<ConfigQualitativeObjective> {

  constructor(public ServiceCollection: ConfigQualitativeObjectiveServiceCollection,
		public ConfigTargetSettingService: ConfigTargetSettingService) {
    super(ServiceCollection.API_Operation, ConfigQualitativeObjective.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ConfigQualitativeObjective> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ConfigQualitativeObjective[]> {
    return super.RetrieveAll();
  }

  Save(configQualitativeObjective: ConfigQualitativeObjective): Promise<ConfigQualitativeObjective> {
    if (!ConfigQualitativeObjective.Validate(configQualitativeObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configQualitativeObjective);
    }
    return super.Save(configQualitativeObjective);
  }

  SaveAttached(configQualitativeObjective: ConfigQualitativeObjective): Promise<ConfigQualitativeObjective> {
    if (!ConfigQualitativeObjective.Validate(configQualitativeObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configQualitativeObjective);
    }
    return super.SaveAttached(configQualitativeObjective);
  }

  SaveCollection(configQualitativeObjectiveList: ConfigQualitativeObjective[]): Promise<Result> {
    return super.SaveCollection(configQualitativeObjectiveList);
  }

  Delete(configQualitativeObjective: ConfigQualitativeObjective): Promise<boolean> {
    return super.Delete(configQualitativeObjective);
  }

  Seek(configQualitativeObjective: ConfigQualitativeObjective = ConfigQualitativeObjective.SeekInstance()): Promise<ConfigQualitativeObjective[]> {
    return super.Seek(configQualitativeObjective);
  }

  SeekLast(configQualitativeObjective: ConfigQualitativeObjective): Promise<ConfigQualitativeObjective> {
    return super.SeekLast(configQualitativeObjective);
  }

  SeekByValue(value: string = ''): Promise<ConfigQualitativeObjective[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}