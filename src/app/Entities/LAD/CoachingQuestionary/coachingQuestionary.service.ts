import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { CoachingQuestionary } from './coachingQuestionary';
import { CoachingQuestionaryServiceCollection } from './coachingQuestionary.service.collection';

import { QuestionaryTypeService } from '../QuestionaryType/questionaryType.service';
import { AssessmentService } from '../Assessment/assessment.service';
import { PersonService } from '../../HR/Person/person.service';
import { CoachingQuestionaryDetail } from '../CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { CoachingQuestionaryAnswered } from '../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';


@Injectable({ providedIn: 'root' })
export class CoachingQuestionaryService extends Service<CoachingQuestionary> implements IService<CoachingQuestionary> {

  constructor(public ServiceCollection: CoachingQuestionaryServiceCollection,
		public QuestionaryTypeService: QuestionaryTypeService,
		public AssessmentService: AssessmentService,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, CoachingQuestionary.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<CoachingQuestionary> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<CoachingQuestionary[]> {
    return super.RetrieveAll();
  }

  Save(coachingQuestionary: CoachingQuestionary): Promise<CoachingQuestionary> {
    if (!CoachingQuestionary.Validate(coachingQuestionary)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionary);
    }
    return super.Save(coachingQuestionary);
  }

  SaveAttached(coachingQuestionary: CoachingQuestionary): Promise<CoachingQuestionary> {
    if (!CoachingQuestionary.Validate(coachingQuestionary)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(coachingQuestionary);
    }
    return super.SaveAttached(coachingQuestionary);
  }

  SaveCollection(coachingQuestionaryList: CoachingQuestionary[]): Promise<Result> {
    return super.SaveCollection(coachingQuestionaryList);
  }

  Delete(coachingQuestionary: CoachingQuestionary): Promise<boolean> {
    return super.Delete(coachingQuestionary);
  }

  Seek(coachingQuestionary: CoachingQuestionary = CoachingQuestionary.SeekInstance()): Promise<CoachingQuestionary[]> {
    return super.Seek(coachingQuestionary);
  }

  SeekLast(coachingQuestionary: CoachingQuestionary): Promise<CoachingQuestionary> {
    return super.SeekLast(coachingQuestionary);
  }

  SeekByValue(value: string = ''): Promise<CoachingQuestionary[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}