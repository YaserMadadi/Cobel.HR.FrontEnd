import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CurrentSituation } from './currentSituation';
import { CurrentSituationServiceCollection } from './currentSituation.service.collection';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class CurrentSituationService extends Service<CurrentSituation> implements IService<CurrentSituation> {

  constructor(public ServiceCollection: CurrentSituationServiceCollection) {
    super(ServiceCollection.API_Operation, CurrentSituation.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CurrentSituation> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CurrentSituation[]> {
    return super.RetrieveAll();
  }

  Save(currentSituation: CurrentSituation): Promise<CurrentSituation> {
    if (!CurrentSituation.Validate(currentSituation)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(currentSituation);
    }
    return super.Save(currentSituation);
  }

  SaveAttached(currentSituation: CurrentSituation): Promise<CurrentSituation> {
    if (!CurrentSituation.Validate(currentSituation)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(currentSituation);
    }
    return super.SaveAttached(currentSituation);
  }

  SaveCollection(currentSituationList: CurrentSituation[]): Promise<Result> {
    return super.SaveCollection(currentSituationList);
  }

  Delete(currentSituation: CurrentSituation): Promise<boolean> {
    return super.Delete(currentSituation);
  }

  Seek(currentSituation: CurrentSituation = CurrentSituation.SeekInstance()): Promise<CurrentSituation[]> {
    return super.Seek(currentSituation);
  }

  SeekLast(currentSituation: CurrentSituation): Promise<CurrentSituation> {
    return super.SeekLast(currentSituation);
  }

  SeekByValue(value: string = ''): Promise<CurrentSituation[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}