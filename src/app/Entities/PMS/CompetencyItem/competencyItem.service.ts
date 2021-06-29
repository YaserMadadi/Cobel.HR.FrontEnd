import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CompetencyItem } from './competencyItem';
import { CompetencyItemServiceCollection } from './competencyItem.service.collection';

import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { AssessmentScore } from '../../LAD/AssessmentScore/assessmentScore';
import { CompetencyItemKPI } from '../CompetencyItemKPI/competencyItemKPI';
import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';


@Injectable({ providedIn: 'root' })
export class CompetencyItemService extends Service<CompetencyItem> implements IService<CompetencyItem> {

  constructor(public ServiceCollection: CompetencyItemServiceCollection) {
    super(ServiceCollection.API_Operation, CompetencyItem.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CompetencyItem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CompetencyItem[]> {
    return super.RetrieveAll();
  }

  Save(competencyItem: CompetencyItem): Promise<CompetencyItem> {
    if (!CompetencyItem.Validate(competencyItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(competencyItem);
    }
    return super.Save(competencyItem);
  }

  SaveAttached(competencyItem: CompetencyItem): Promise<CompetencyItem> {
    if (!CompetencyItem.Validate(competencyItem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(competencyItem);
    }
    return super.SaveAttached(competencyItem);
  }

  SaveCollection(competencyItemList: CompetencyItem[]): Promise<Result> {
    return super.SaveCollection(competencyItemList);
  }

  Delete(competencyItem: CompetencyItem): Promise<boolean> {
    return super.Delete(competencyItem);
  }

  Seek(competencyItem: CompetencyItem = CompetencyItem.SeekInstance()): Promise<CompetencyItem[]> {
    return super.Seek(competencyItem);
  }

  SeekLast(competencyItem: CompetencyItem): Promise<CompetencyItem> {
    return super.SeekLast(competencyItem);
  }

  SeekByValue(value: string = ''): Promise<CompetencyItem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}