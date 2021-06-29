import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { UniversityHistory } from './universityHistory';
import { UniversityHistoryServiceCollection } from './universityHistory.service.collection';

import { PersonService } from '../Person/person.service';
import { UniversityDegreeService } from '../../Base/UniversityDegree/universityDegree.service';
import { UniversityService } from '../../Base/University/university.service';
import { FieldOfStudyService } from '../../Base/FieldOfStudy/fieldOfStudy.service';
import { EducationSystemService } from '../../Base/EducationSystem/educationSystem.service';
import { CertificationTypeService } from '../../Base/CertificationType/certificationType.service';
import { UniversityTerminate } from '../UniversityTerminate/universityTerminate';


@Injectable({ providedIn: 'root' })
export class UniversityHistoryService extends Service<UniversityHistory> implements IService<UniversityHistory> {

  constructor(public ServiceCollection: UniversityHistoryServiceCollection,
		public PersonService: PersonService,
		public UniversityDegreeService: UniversityDegreeService,
		public UniversityService: UniversityService,
		public FieldOfStudyService: FieldOfStudyService,
		public EducationSystemService: EducationSystemService,
		public CertificationTypeService: CertificationTypeService) {
    super(ServiceCollection.API_Operation, UniversityHistory.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<UniversityHistory> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<UniversityHistory[]> {
    return super.RetrieveAll();
  }

  Save(universityHistory: UniversityHistory): Promise<UniversityHistory> {
    if (!UniversityHistory.Validate(universityHistory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityHistory);
    }
    return super.Save(universityHistory);
  }

  SaveAttached(universityHistory: UniversityHistory): Promise<UniversityHistory> {
    if (!UniversityHistory.Validate(universityHistory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityHistory);
    }
    return super.SaveAttached(universityHistory);
  }

  SaveCollection(universityHistoryList: UniversityHistory[]): Promise<Result> {
    return super.SaveCollection(universityHistoryList);
  }

  Delete(universityHistory: UniversityHistory): Promise<boolean> {
    return super.Delete(universityHistory);
  }

  Seek(universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.Seek(universityHistory);
  }

  SeekLast(universityHistory: UniversityHistory): Promise<UniversityHistory> {
    return super.SeekLast(universityHistory);
  }

  SeekByValue(value: string = ''): Promise<UniversityHistory[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}