import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { SchoolLevel } from './schoolLevel';
import { SchoolLevelServiceCollection } from './schoolLevel.service.collection';

import { SchoolHistory } from '../../HR/SchoolHistory/schoolHistory';


@Injectable({ providedIn: 'root' })
export class SchoolLevelService extends Service<SchoolLevel> implements IService<SchoolLevel> {

  constructor(public ServiceCollection: SchoolLevelServiceCollection) {
    super(ServiceCollection.API_Operation, SchoolLevel.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<SchoolLevel> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<SchoolLevel[]> {
    return super.RetrieveAll();
  }

  Save(schoolLevel: SchoolLevel): Promise<SchoolLevel> {
    if (!SchoolLevel.Validate(schoolLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(schoolLevel);
    }
    return super.Save(schoolLevel);
  }

  SaveAttached(schoolLevel: SchoolLevel): Promise<SchoolLevel> {
    if (!SchoolLevel.Validate(schoolLevel)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(schoolLevel);
    }
    return super.SaveAttached(schoolLevel);
  }

  SaveCollection(schoolLevelList: SchoolLevel[]): Promise<Result> {
    return super.SaveCollection(schoolLevelList);
  }

  Delete(schoolLevel: SchoolLevel): Promise<boolean> {
    return super.Delete(schoolLevel);
  }

  Seek(schoolLevel: SchoolLevel = SchoolLevel.SeekInstance()): Promise<SchoolLevel[]> {
    return super.Seek(schoolLevel);
  }

  SeekLast(schoolLevel: SchoolLevel): Promise<SchoolLevel> {
    return super.SeekLast(schoolLevel);
  }

  SeekByValue(value: string = ''): Promise<SchoolLevel[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}