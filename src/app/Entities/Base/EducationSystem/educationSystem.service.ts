import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EducationSystem } from './educationSystem';
import { EducationSystemServiceCollection } from './educationSystem.service.collection';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class EducationSystemService extends Service<EducationSystem> implements IService<EducationSystem> {

  constructor(public ServiceCollection: EducationSystemServiceCollection) {
    super(ServiceCollection.API_Operation, EducationSystem.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new EducationSystem();
}

  RetrieveById(id: number): Promise<EducationSystem> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EducationSystem[]> {
    return super.RetrieveAll();
  }

  Save(educationSystem: EducationSystem): Promise<EducationSystem> {
    if (!EducationSystem.Validate(educationSystem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(educationSystem);
    }
    return super.Save(educationSystem);
  }

  SaveAttached(educationSystem: EducationSystem): Promise<EducationSystem> {
    if (!EducationSystem.Validate(educationSystem)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(educationSystem);
    }
    return super.SaveAttached(educationSystem);
  }

  SaveCollection(educationSystemList: EducationSystem[]): Promise<Result> {
    return super.SaveCollection(educationSystemList);
  }

  Delete(educationSystem: EducationSystem): Promise<boolean> {
    return super.Delete(educationSystem);
  }

  Seek(educationSystem: EducationSystem = EducationSystem.SeekInstance()): Promise<EducationSystem[]> {
    return super.Seek(educationSystem);
  }

  SeekLast(educationSystem: EducationSystem): Promise<EducationSystem> {
    return super.SeekLast(educationSystem);
  }

  SeekByValue(value: string = ''): Promise<EducationSystem[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}