import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FunctionalObjective } from './functionalObjective';
import { FunctionalObjectiveServiceCollection } from './functionalObjective.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { FunctionalObjectiveComment } from '../FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalKPI } from '../FunctionalKPI/functionalKPI';


@Injectable({ providedIn: 'root' })
export class FunctionalObjectiveService extends Service<FunctionalObjective> implements IService<FunctionalObjective> {

  constructor(public ServiceCollection: FunctionalObjectiveServiceCollection,
		public TargetSettingService: TargetSettingService) {
    super(ServiceCollection.API_Operation, FunctionalObjective.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FunctionalObjective> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FunctionalObjective[]> {
    return super.RetrieveAll();
  }

  Save(functionalObjective: FunctionalObjective): Promise<FunctionalObjective> {
    if (!FunctionalObjective.Validate(functionalObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalObjective);
    }
    return super.Save(functionalObjective);
  }

  SaveAttached(functionalObjective: FunctionalObjective): Promise<FunctionalObjective> {
    if (!FunctionalObjective.Validate(functionalObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(functionalObjective);
    }
    return super.SaveAttached(functionalObjective);
  }

  SaveCollection(functionalObjectiveList: FunctionalObjective[]): Promise<Result> {
    return super.SaveCollection(functionalObjectiveList);
  }

  Delete(functionalObjective: FunctionalObjective): Promise<boolean> {
    return super.Delete(functionalObjective);
  }

  Seek(functionalObjective: FunctionalObjective = FunctionalObjective.SeekInstance()): Promise<FunctionalObjective[]> {
    return super.Seek(functionalObjective);
  }

  SeekLast(functionalObjective: FunctionalObjective): Promise<FunctionalObjective> {
    return super.SeekLast(functionalObjective);
  }

  SeekByValue(value: string = ''): Promise<FunctionalObjective[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}