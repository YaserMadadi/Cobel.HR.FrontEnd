import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { DevelopmentGoal } from './developmentGoal';
import { DevelopmentGoalServiceCollection } from './developmentGoal.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';


@Injectable({ providedIn: 'root' })
export class DevelopmentGoalService extends Service<DevelopmentGoal> implements IService<DevelopmentGoal> {

  constructor(public ServiceCollection: DevelopmentGoalServiceCollection,
		public AssessmentService: AssessmentService) {
    super(ServiceCollection.API_Operation, DevelopmentGoal.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new DevelopmentGoal();
}

  RetrieveById(id: number): Promise<DevelopmentGoal> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<DevelopmentGoal[]> {
    return super.RetrieveAll();
  }

  Save(developmentGoal: DevelopmentGoal): Promise<DevelopmentGoal> {
    if (!DevelopmentGoal.Validate(developmentGoal)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentGoal);
    }
    return super.Save(developmentGoal);
  }

  SaveAttached(developmentGoal: DevelopmentGoal): Promise<DevelopmentGoal> {
    if (!DevelopmentGoal.Validate(developmentGoal)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(developmentGoal);
    }
    return super.SaveAttached(developmentGoal);
  }

  SaveCollection(developmentGoalList: DevelopmentGoal[]): Promise<Result> {
    return super.SaveCollection(developmentGoalList);
  }

  Delete(developmentGoal: DevelopmentGoal): Promise<boolean> {
    return super.Delete(developmentGoal);
  }

  Seek(developmentGoal: DevelopmentGoal = DevelopmentGoal.SeekInstance()): Promise<DevelopmentGoal[]> {
    return super.Seek(developmentGoal);
  }

  SeekLast(developmentGoal: DevelopmentGoal): Promise<DevelopmentGoal> {
    return super.SeekLast(developmentGoal);
  }

  SeekByValue(value: string = ''): Promise<DevelopmentGoal[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}