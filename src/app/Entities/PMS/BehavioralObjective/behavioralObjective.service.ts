import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { BehavioralObjective } from './behavioralObjective';
import { BehavioralObjectiveServiceCollection } from './behavioralObjective.service.collection';

import { TargetSettingService } from '../TargetSetting/targetSetting.service';
import { CompetencyItemService } from '../CompetencyItem/competencyItem.service';
import { ExpectedLevelService } from '../../Base.PMS/ExpectedLevel/expectedLevel.service';
import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';


@Injectable({ providedIn: 'root' })
export class BehavioralObjectiveService extends Service<BehavioralObjective> implements IService<BehavioralObjective> {

  constructor(public ServiceCollection: BehavioralObjectiveServiceCollection,
		public TargetSettingService: TargetSettingService,
		public CompetencyItemService: CompetencyItemService,
		public ExpectedLevelService: ExpectedLevelService) {
    super(ServiceCollection.API_Operation, BehavioralObjective.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<BehavioralObjective> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<BehavioralObjective[]> {
    return super.RetrieveAll();
  }

  Save(behavioralObjective: BehavioralObjective): Promise<BehavioralObjective> {
    if (!BehavioralObjective.Validate(behavioralObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralObjective);
    }
    return super.Save(behavioralObjective);
  }

  SaveAttached(behavioralObjective: BehavioralObjective): Promise<BehavioralObjective> {
    if (!BehavioralObjective.Validate(behavioralObjective)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(behavioralObjective);
    }
    return super.SaveAttached(behavioralObjective);
  }

  SaveCollection(behavioralObjectiveList: BehavioralObjective[]): Promise<Result> {
    return super.SaveCollection(behavioralObjectiveList);
  }

  Delete(behavioralObjective: BehavioralObjective): Promise<boolean> {
    return super.Delete(behavioralObjective);
  }

  Seek(behavioralObjective: BehavioralObjective = BehavioralObjective.SeekInstance()): Promise<BehavioralObjective[]> {
    return super.Seek(behavioralObjective);
  }

  SeekLast(behavioralObjective: BehavioralObjective): Promise<BehavioralObjective> {
    return super.SeekLast(behavioralObjective);
  }

  SeekByValue(value: string = ''): Promise<BehavioralObjective[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}