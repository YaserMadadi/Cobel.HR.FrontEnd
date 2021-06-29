import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { BehavioralKPI } from './behavioralKPI';
import { BehavioralKPIServiceCollection } from './behavioralKPI.service.collection';

import { BehavioralObjectiveService } from '../BehavioralObjective/behavioralObjective.service';
import { CompetencyItemKPIService } from '../CompetencyItemKPI/competencyItemKPI.service';
import { BehavioralAppraise } from '../BehavioralAppraise/behavioralAppraise';


@Injectable({ providedIn: 'root' })
export class BehavioralKPIService extends Service<BehavioralKPI> implements IService<BehavioralKPI> {

  constructor(public ServiceCollection: BehavioralKPIServiceCollection,
		public BehavioralObjectiveService: BehavioralObjectiveService,
		public CompetencyItemKPIService: CompetencyItemKPIService) {
    super(ServiceCollection.API_Operation, BehavioralKPI.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<BehavioralKPI> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<BehavioralKPI[]> {
    return super.RetrieveAll();
  }

  Save(behavioralKPI: BehavioralKPI): Promise<BehavioralKPI> {
    if (!BehavioralKPI.Validate(behavioralKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralKPI);
    }
    return super.Save(behavioralKPI);
  }

  SaveAttached(behavioralKPI: BehavioralKPI): Promise<BehavioralKPI> {
    if (!BehavioralKPI.Validate(behavioralKPI)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralKPI);
    }
    return super.SaveAttached(behavioralKPI);
  }

  SaveCollection(behavioralKPIList: BehavioralKPI[]): Promise<Result> {
    return super.SaveCollection(behavioralKPIList);
  }

  Delete(behavioralKPI: BehavioralKPI): Promise<boolean> {
    return super.Delete(behavioralKPI);
  }

  Seek(behavioralKPI: BehavioralKPI = BehavioralKPI.SeekInstance()): Promise<BehavioralKPI[]> {
    return super.Seek(behavioralKPI);
  }

  SeekLast(behavioralKPI: BehavioralKPI): Promise<BehavioralKPI> {
    return super.SeekLast(behavioralKPI);
  }

  SeekByValue(value: string = ''): Promise<BehavioralKPI[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}