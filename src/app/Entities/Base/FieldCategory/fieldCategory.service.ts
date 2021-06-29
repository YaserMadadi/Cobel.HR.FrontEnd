import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { FieldCategory } from './fieldCategory';
import { FieldCategoryServiceCollection } from './fieldCategory.service.collection';

import { PersonCertificate } from '../../HR/PersonCertificate/personCertificate';


@Injectable({ providedIn: 'root' })
export class FieldCategoryService extends Service<FieldCategory> implements IService<FieldCategory> {

  constructor(public ServiceCollection: FieldCategoryServiceCollection) {
    super(ServiceCollection.API_Operation, FieldCategory.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<FieldCategory> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<FieldCategory[]> {
    return super.RetrieveAll();
  }

  Save(fieldCategory: FieldCategory): Promise<FieldCategory> {
    if (!FieldCategory.Validate(fieldCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(fieldCategory);
    }
    return super.Save(fieldCategory);
  }

  SaveAttached(fieldCategory: FieldCategory): Promise<FieldCategory> {
    if (!FieldCategory.Validate(fieldCategory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(fieldCategory);
    }
    return super.SaveAttached(fieldCategory);
  }

  SaveCollection(fieldCategoryList: FieldCategory[]): Promise<Result> {
    return super.SaveCollection(fieldCategoryList);
  }

  Delete(fieldCategory: FieldCategory): Promise<boolean> {
    return super.Delete(fieldCategory);
  }

  Seek(fieldCategory: FieldCategory = FieldCategory.SeekInstance()): Promise<FieldCategory[]> {
    return super.Seek(fieldCategory);
  }

  SeekLast(fieldCategory: FieldCategory): Promise<FieldCategory> {
    return super.SeekLast(fieldCategory);
  }

  SeekByValue(value: string = ''): Promise<FieldCategory[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}