import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { AssessmentScore } from './assessmentScore';
import { AssessmentScoreServiceCollection } from './assessmentScore.service.collection';

import { AssessmentService } from '../Assessment/assessment.service';
import { CompetencyItemService } from '../../PMS/CompetencyItem/competencyItem.service';


@Injectable({ providedIn: 'root' })
export class AssessmentScoreService extends Service<AssessmentScore> implements IService<AssessmentScore> {

  constructor(public ServiceCollection: AssessmentScoreServiceCollection,
		public AssessmentService: AssessmentService,
		public CompetencyItemService: CompetencyItemService) {
    super(ServiceCollection.API_Operation, AssessmentScore.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<AssessmentScore> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<AssessmentScore[]> {
    return super.RetrieveAll();
  }

  Save(assessmentScore: AssessmentScore): Promise<AssessmentScore> {
    if (!AssessmentScore.Validate(assessmentScore)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentScore);
    }
    return super.Save(assessmentScore);
  }

  SaveAttached(assessmentScore: AssessmentScore): Promise<AssessmentScore> {
    if (!AssessmentScore.Validate(assessmentScore)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessmentScore);
    }
    return super.SaveAttached(assessmentScore);
  }

  SaveCollection(assessmentScoreList: AssessmentScore[]): Promise<Result> {
    return super.SaveCollection(assessmentScoreList);
  }

  Delete(assessmentScore: AssessmentScore): Promise<boolean> {
    return super.Delete(assessmentScore);
  }

  Seek(assessmentScore: AssessmentScore = AssessmentScore.SeekInstance()): Promise<AssessmentScore[]> {
    return super.Seek(assessmentScore);
  }

  SeekLast(assessmentScore: AssessmentScore): Promise<AssessmentScore> {
    return super.SeekLast(assessmentScore);
  }

  SeekByValue(value: string = ''): Promise<AssessmentScore[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}