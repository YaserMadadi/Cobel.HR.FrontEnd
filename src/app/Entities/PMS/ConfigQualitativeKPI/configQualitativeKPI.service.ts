import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ConfigQualitativeKPI } from './configQualitativeKPI';
import { ConfigQualitativeKPIServiceCollection } from './configQualitativeKPI.service.collection';

import { ConfigQualitativeObjectiveService } from '../ConfigQualitativeObjective/configQualitativeObjective.service';


@Injectable({ providedIn: 'root' })
export class ConfigQualitativeKPIService extends Service<ConfigQualitativeKPI> implements IService<ConfigQualitativeKPI> {

  constructor(public ServiceCollection: ConfigQualitativeKPIServiceCollection,
		public ConfigQualitativeObjectiveService: ConfigQualitativeObjectiveService) {
    super(ServiceCollection.API_Operation, ConfigQualitativeKPI.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ConfigQualitativeKPI();
}

  RetrieveById(id: number): Promise<ConfigQualitativeKPI> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ConfigQualitativeKPI[]> {
    return super.RetrieveAll();
  }

  Save(configQualitativeKPI: ConfigQualitativeKPI): Promise<ConfigQualitativeKPI> {
    if (!ConfigQualitativeKPI.Validate(configQualitativeKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configQualitativeKPI);
    }
    return super.Save(configQualitativeKPI);
  }

  SaveAttached(configQualitativeKPI: ConfigQualitativeKPI): Promise<ConfigQualitativeKPI> {
    if (!ConfigQualitativeKPI.Validate(configQualitativeKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(configQualitativeKPI);
    }
    return super.SaveAttached(configQualitativeKPI);
  }

  SaveCollection(configQualitativeKPIList: ConfigQualitativeKPI[]): Promise<Result> {
    return super.SaveCollection(configQualitativeKPIList);
  }

  Delete(configQualitativeKPI: ConfigQualitativeKPI): Promise<boolean> {
    return super.Delete(configQualitativeKPI);
  }

  Seek(configQualitativeKPI: ConfigQualitativeKPI = ConfigQualitativeKPI.SeekInstance()): Promise<ConfigQualitativeKPI[]> {
    return super.Seek(configQualitativeKPI);
  }

  SeekLast(configQualitativeKPI: ConfigQualitativeKPI): Promise<ConfigQualitativeKPI> {
    return super.SeekLast(configQualitativeKPI);
  }

  SeekByValue(value: string = ''): Promise<ConfigQualitativeKPI[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}