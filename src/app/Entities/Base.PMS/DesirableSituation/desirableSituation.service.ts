import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DesirableSituation } from './desirableSituation';
import { DesirableSituationServiceCollection } from './desirableSituation.service.collection';

import { IndividualDevelopmentPlan } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';


@Injectable({ providedIn: 'root' })
export class DesirableSituationService extends Service<DesirableSituation> implements IService<DesirableSituation> {

  constructor(public ServiceCollection: DesirableSituationServiceCollection) {
    super(ServiceCollection.API_Operation, DesirableSituation.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<DesirableSituation> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DesirableSituation[]> {
    return super.RetrieveAll();
  }

  Save(desirableSituation: DesirableSituation): Promise<DesirableSituation> {
    if (!DesirableSituation.Validate(desirableSituation)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(desirableSituation);
    }
    return super.Save(desirableSituation);
  }

  SaveAttached(desirableSituation: DesirableSituation): Promise<DesirableSituation> {
    if (!DesirableSituation.Validate(desirableSituation)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(desirableSituation);
    }
    return super.SaveAttached(desirableSituation);
  }

  SaveCollection(desirableSituationList: DesirableSituation[]): Promise<Result> {
    return super.SaveCollection(desirableSituationList);
  }

  Delete(desirableSituation: DesirableSituation): Promise<boolean> {
    return super.Delete(desirableSituation);
  }

  Seek(desirableSituation: DesirableSituation = DesirableSituation.SeekInstance()): Promise<DesirableSituation[]> {
    return super.Seek(desirableSituation);
  }

  SeekLast(desirableSituation: DesirableSituation): Promise<DesirableSituation> {
    return super.SeekLast(desirableSituation);
  }

  SeekByValue(value: string = ''): Promise<DesirableSituation[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}