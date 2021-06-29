import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FieldOfStudy } from './fieldOfStudy';
import { FieldOfStudyServiceCollection } from './fieldOfStudy.service.collection';

import { UniversityFieldCategoryService } from '../UniversityFieldCategory/universityFieldCategory.service';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class FieldOfStudyService extends Service<FieldOfStudy> implements IService<FieldOfStudy> {

  constructor(public ServiceCollection: FieldOfStudyServiceCollection,
		public UniversityFieldCategoryService: UniversityFieldCategoryService) {
    super(ServiceCollection.API_Operation, FieldOfStudy.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FieldOfStudy> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FieldOfStudy[]> {
    return super.RetrieveAll();
  }

  Save(fieldOfStudy: FieldOfStudy): Promise<FieldOfStudy> {
    if (!FieldOfStudy.Validate(fieldOfStudy)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(fieldOfStudy);
    }
    return super.Save(fieldOfStudy);
  }

  SaveAttached(fieldOfStudy: FieldOfStudy): Promise<FieldOfStudy> {
    if (!FieldOfStudy.Validate(fieldOfStudy)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(fieldOfStudy);
    }
    return super.SaveAttached(fieldOfStudy);
  }

  SaveCollection(fieldOfStudyList: FieldOfStudy[]): Promise<Result> {
    return super.SaveCollection(fieldOfStudyList);
  }

  Delete(fieldOfStudy: FieldOfStudy): Promise<boolean> {
    return super.Delete(fieldOfStudy);
  }

  Seek(fieldOfStudy: FieldOfStudy = FieldOfStudy.SeekInstance()): Promise<FieldOfStudy[]> {
    return super.Seek(fieldOfStudy);
  }

  SeekLast(fieldOfStudy: FieldOfStudy): Promise<FieldOfStudy> {
    return super.SeekLast(fieldOfStudy);
  }

  SeekByValue(value: string = ''): Promise<FieldOfStudy[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}