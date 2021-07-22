import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DevelopmentPlanCompetency } from './developmentPlanCompetency';
import { DevelopmentPlanCompetencyServiceCollection } from './developmentPlanCompetency.service.collection';

import { IndividualDevelopmentPlanService } from '../IndividualDevelopmentPlan/individualDevelopmentPlan.service';
import { CompetencyItemService } from '../CompetencyItem/competencyItem.service';


@Injectable({ providedIn: 'root' })
export class DevelopmentPlanCompetencyService extends Service<DevelopmentPlanCompetency> implements IService<DevelopmentPlanCompetency> {

  constructor(public ServiceCollection: DevelopmentPlanCompetencyServiceCollection,
		public IndividualDevelopmentPlanService: IndividualDevelopmentPlanService,
		public CompetencyItemService: CompetencyItemService) {
    super(ServiceCollection.API_Operation, DevelopmentPlanCompetency.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new DevelopmentPlanCompetency();
}

  RetrieveById(id: number): Promise<DevelopmentPlanCompetency> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DevelopmentPlanCompetency[]> {
    return super.RetrieveAll();
  }

  Save(developmentPlanCompetency: DevelopmentPlanCompetency): Promise<DevelopmentPlanCompetency> {
    if (!DevelopmentPlanCompetency.Validate(developmentPlanCompetency)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanCompetency);
    }
    return super.Save(developmentPlanCompetency);
  }

  SaveAttached(developmentPlanCompetency: DevelopmentPlanCompetency): Promise<DevelopmentPlanCompetency> {
    if (!DevelopmentPlanCompetency.Validate(developmentPlanCompetency)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentPlanCompetency);
    }
    return super.SaveAttached(developmentPlanCompetency);
  }

  SaveCollection(developmentPlanCompetencyList: DevelopmentPlanCompetency[]): Promise<Result> {
    return super.SaveCollection(developmentPlanCompetencyList);
  }

  Delete(developmentPlanCompetency: DevelopmentPlanCompetency): Promise<boolean> {
    return super.Delete(developmentPlanCompetency);
  }

  Seek(developmentPlanCompetency: DevelopmentPlanCompetency = DevelopmentPlanCompetency.SeekInstance()): Promise<DevelopmentPlanCompetency[]> {
    return super.Seek(developmentPlanCompetency);
  }

  SeekLast(developmentPlanCompetency: DevelopmentPlanCompetency): Promise<DevelopmentPlanCompetency> {
    return super.SeekLast(developmentPlanCompetency);
  }

  SeekByValue(value: string = ''): Promise<DevelopmentPlanCompetency[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}