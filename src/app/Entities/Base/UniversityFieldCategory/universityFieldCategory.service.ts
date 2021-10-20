import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { UniversityFieldCategory } from './universityFieldCategory';
import { UniversityFieldCategoryServiceCollection } from './universityFieldCategory.service.collection';

import { FieldOfStudy } from '../FieldOfStudy/fieldOfStudy';


@Injectable({ providedIn: 'root' })
export class UniversityFieldCategoryService extends Service<UniversityFieldCategory> implements IService<UniversityFieldCategory> {

  constructor(public ServiceCollection: UniversityFieldCategoryServiceCollection) {
    super(ServiceCollection.API_Operation, UniversityFieldCategory.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new UniversityFieldCategory();
}

  RetrieveById(id: number): Promise<UniversityFieldCategory> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<UniversityFieldCategory[]> {
    return super.RetrieveAll();
  }

  Save(universityFieldCategory: UniversityFieldCategory): Promise<UniversityFieldCategory> {
    if (!UniversityFieldCategory.Validate(universityFieldCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityFieldCategory);
    }
    return super.Save(universityFieldCategory);
  }

  SaveAttached(universityFieldCategory: UniversityFieldCategory): Promise<UniversityFieldCategory> {
    if (!UniversityFieldCategory.Validate(universityFieldCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityFieldCategory);
    }
    return super.SaveAttached(universityFieldCategory);
  }

  SaveCollection(universityFieldCategoryList: UniversityFieldCategory[]): Promise<Result> {
    return super.SaveCollection(universityFieldCategoryList);
  }

  Delete(universityFieldCategory: UniversityFieldCategory): Promise<boolean> {
    return super.Delete(universityFieldCategory);
  }

  Seek(universityFieldCategory: UniversityFieldCategory = UniversityFieldCategory.SeekInstance()): Promise<UniversityFieldCategory[]> {
    return super.Seek(universityFieldCategory);
  }

  SeekLast(universityFieldCategory: UniversityFieldCategory): Promise<UniversityFieldCategory> {
    return super.SeekLast(universityFieldCategory);
  }

  SeekByValue(value: string = ''): Promise<UniversityFieldCategory[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}