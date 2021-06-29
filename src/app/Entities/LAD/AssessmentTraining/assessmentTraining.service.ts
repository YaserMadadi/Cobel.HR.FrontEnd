import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AssessmentTraining } from './assessmentTraining';
import { AssessmentTrainingServiceCollection } from './assessmentTraining.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { YearQuarterService } from '../../Base/YearQuarter/yearQuarter.service';


@Injectable({ providedIn: 'root' })
export class AssessmentTrainingService extends Service<AssessmentTraining> implements IService<AssessmentTraining> {

  constructor(public ServiceCollection: AssessmentTrainingServiceCollection,
		public AssessmentService: AssessmentService,
		public YearQuarterService: YearQuarterService) {
    super(ServiceCollection.API_Operation, AssessmentTraining.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<AssessmentTraining> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AssessmentTraining[]> {
    return super.RetrieveAll();
  }

  Save(assessmentTraining: AssessmentTraining): Promise<AssessmentTraining> {
    if (!AssessmentTraining.Validate(assessmentTraining)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentTraining);
    }
    return super.Save(assessmentTraining);
  }

  SaveAttached(assessmentTraining: AssessmentTraining): Promise<AssessmentTraining> {
    if (!AssessmentTraining.Validate(assessmentTraining)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentTraining);
    }
    return super.SaveAttached(assessmentTraining);
  }

  SaveCollection(assessmentTrainingList: AssessmentTraining[]): Promise<Result> {
    return super.SaveCollection(assessmentTrainingList);
  }

  Delete(assessmentTraining: AssessmentTraining): Promise<boolean> {
    return super.Delete(assessmentTraining);
  }

  Seek(assessmentTraining: AssessmentTraining = AssessmentTraining.SeekInstance()): Promise<AssessmentTraining[]> {
    return super.Seek(assessmentTraining);
  }

  SeekLast(assessmentTraining: AssessmentTraining): Promise<AssessmentTraining> {
    return super.SeekLast(assessmentTraining);
  }

  SeekByValue(value: string = ''): Promise<AssessmentTraining[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}