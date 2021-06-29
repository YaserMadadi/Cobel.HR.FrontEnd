import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Assessment } from './assessment';
import { AssessmentServiceCollection } from './assessment.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { AssessmentTypeService } from '../AssessmentType/assessmentType.service';
import { AssessorService } from '../Assessor/assessor.service';
import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';
import { FeedbackSession } from '../FeedbackSession/feedbackSession';
import { DevelopmentGoal } from '../DevelopmentGoal/developmentGoal';
import { Conclusion } from '../Conclusion/conclusion';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { AssessmentTraining } from '../AssessmentTraining/assessmentTraining';
import { AssessmentScore } from '../AssessmentScore/assessmentScore';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';
import { RotationAssessment } from '../RotationAssessment/rotationAssessment';


@Injectable({ providedIn: 'root' })
export class AssessmentService extends Service<Assessment> implements IService<Assessment> {

  constructor(public ServiceCollection: AssessmentServiceCollection,
		public EmployeeService: EmployeeService,
		public AssessmentTypeService: AssessmentTypeService,
		public AssessorService: AssessorService) {
    super(ServiceCollection.API_Operation, Assessment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Assessment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Assessment[]> {
    return super.RetrieveAll();
  }

  Save(assessment: Assessment): Promise<Assessment> {
    if (!Assessment.Validate(assessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessment);
    }
    return super.Save(assessment);
  }

  SaveAttached(assessment: Assessment): Promise<Assessment> {
    if (!Assessment.Validate(assessment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(assessment);
    }
    return super.SaveAttached(assessment);
  }

  SaveCollection(assessmentList: Assessment[]): Promise<Result> {
    return super.SaveCollection(assessmentList);
  }

  Delete(assessment: Assessment): Promise<boolean> {
    return super.Delete(assessment);
  }

  Seek(assessment: Assessment = Assessment.SeekInstance()): Promise<Assessment[]> {
    return super.Seek(assessment);
  }

  SeekLast(assessment: Assessment): Promise<Assessment> {
    return super.SeekLast(assessment);
  }

  SeekByValue(value: string = ''): Promise<Assessment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}