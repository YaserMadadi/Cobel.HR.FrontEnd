import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { IndividualDevelopmentPlan } from './individualDevelopmentPlan';
import { IndividualDevelopmentPlanServiceCollection } from './individualDevelopmentPlan.service.collection';

import { VisionService } from '../Vision/vision.service';
import { DevelopmentPlanPriorityService } from '../../Base.PMS/DevelopmentPlanPriority/developmentPlanPriority.service';
import { SubjectService } from '../../Base.PMS/Subject/subject.service';
import { CurrentSituationService } from '../../Base.PMS/CurrentSituation/currentSituation.service';
import { DesirableSituationService } from '../../Base.PMS/DesirableSituation/desirableSituation.service';
import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';


@Injectable({ providedIn: 'root' })
export class IndividualDevelopmentPlanService extends Service<IndividualDevelopmentPlan> implements IService<IndividualDevelopmentPlan> {

  constructor(public ServiceCollection: IndividualDevelopmentPlanServiceCollection,
		public VisionService: VisionService,
		public DevelopmentPlanPriorityService: DevelopmentPlanPriorityService,
		public SubjectService: SubjectService,
		public CurrentSituationService: CurrentSituationService,
		public DesirableSituationService: DesirableSituationService) {
    super(ServiceCollection.API_Operation, IndividualDevelopmentPlan.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new IndividualDevelopmentPlan();
}

  RetrieveById(id: number): Promise<IndividualDevelopmentPlan> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<IndividualDevelopmentPlan[]> {
    return super.RetrieveAll();
  }

  Save(individualDevelopmentPlan: IndividualDevelopmentPlan): Promise<IndividualDevelopmentPlan> {
    if (!IndividualDevelopmentPlan.Validate(individualDevelopmentPlan)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(individualDevelopmentPlan);
    }
    return super.Save(individualDevelopmentPlan);
  }

  SaveAttached(individualDevelopmentPlan: IndividualDevelopmentPlan): Promise<IndividualDevelopmentPlan> {
    if (!IndividualDevelopmentPlan.Validate(individualDevelopmentPlan)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(individualDevelopmentPlan);
    }
    return super.SaveAttached(individualDevelopmentPlan);
  }

  SaveCollection(individualDevelopmentPlanList: IndividualDevelopmentPlan[]): Promise<Result> {
    return super.SaveCollection(individualDevelopmentPlanList);
  }

  Delete(individualDevelopmentPlan: IndividualDevelopmentPlan): Promise<boolean> {
    return super.Delete(individualDevelopmentPlan);
  }

  Seek(individualDevelopmentPlan: IndividualDevelopmentPlan = IndividualDevelopmentPlan.SeekInstance()): Promise<IndividualDevelopmentPlan[]> {
    return super.Seek(individualDevelopmentPlan);
  }

  SeekLast(individualDevelopmentPlan: IndividualDevelopmentPlan): Promise<IndividualDevelopmentPlan> {
    return super.SeekLast(individualDevelopmentPlan);
  }

  SeekByValue(value: string = ''): Promise<IndividualDevelopmentPlan[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}