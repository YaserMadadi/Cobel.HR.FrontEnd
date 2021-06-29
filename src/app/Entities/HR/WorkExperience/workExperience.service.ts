import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { WorkExperience } from './workExperience';
import { WorkExperienceServiceCollection } from './workExperience.service.collection';

import { PersonService } from '../Person/person.service';


@Injectable({ providedIn: 'root' })
export class WorkExperienceService extends Service<WorkExperience> implements IService<WorkExperience> {

  constructor(public ServiceCollection: WorkExperienceServiceCollection,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, WorkExperience.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<WorkExperience> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<WorkExperience[]> {
    return super.RetrieveAll();
  }

  Save(workExperience: WorkExperience): Promise<WorkExperience> {
    if (!WorkExperience.Validate(workExperience)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(workExperience);
    }
    return super.Save(workExperience);
  }

  SaveAttached(workExperience: WorkExperience): Promise<WorkExperience> {
    if (!WorkExperience.Validate(workExperience)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(workExperience);
    }
    return super.SaveAttached(workExperience);
  }

  SaveCollection(workExperienceList: WorkExperience[]): Promise<Result> {
    return super.SaveCollection(workExperienceList);
  }

  Delete(workExperience: WorkExperience): Promise<boolean> {
    return super.Delete(workExperience);
  }

  Seek(workExperience: WorkExperience = WorkExperience.SeekInstance()): Promise<WorkExperience[]> {
    return super.Seek(workExperience);
  }

  SeekLast(workExperience: WorkExperience): Promise<WorkExperience> {
    return super.SeekLast(workExperience);
  }

  SeekByValue(value: string = ''): Promise<WorkExperience[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}