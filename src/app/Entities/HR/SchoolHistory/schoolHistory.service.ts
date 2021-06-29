import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { SchoolHistory } from './schoolHistory';
import { SchoolHistoryServiceCollection } from './schoolHistory.service.collection';

import { PersonService } from '../Person/person.service';
import { SchoolLevelService } from '../../Base/SchoolLevel/schoolLevel.service';


@Injectable({ providedIn: 'root' })
export class SchoolHistoryService extends Service<SchoolHistory> implements IService<SchoolHistory> {

  constructor(public ServiceCollection: SchoolHistoryServiceCollection,
		public PersonService: PersonService,
		public SchoolLevelService: SchoolLevelService) {
    super(ServiceCollection.API_Operation, SchoolHistory.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<SchoolHistory> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<SchoolHistory[]> {
    return super.RetrieveAll();
  }

  Save(schoolHistory: SchoolHistory): Promise<SchoolHistory> {
    if (!SchoolHistory.Validate(schoolHistory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(schoolHistory);
    }
    return super.Save(schoolHistory);
  }

  SaveAttached(schoolHistory: SchoolHistory): Promise<SchoolHistory> {
    if (!SchoolHistory.Validate(schoolHistory)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(schoolHistory);
    }
    return super.SaveAttached(schoolHistory);
  }

  SaveCollection(schoolHistoryList: SchoolHistory[]): Promise<Result> {
    return super.SaveCollection(schoolHistoryList);
  }

  Delete(schoolHistory: SchoolHistory): Promise<boolean> {
    return super.Delete(schoolHistory);
  }

  Seek(schoolHistory: SchoolHistory = SchoolHistory.SeekInstance()): Promise<SchoolHistory[]> {
    return super.Seek(schoolHistory);
  }

  SeekLast(schoolHistory: SchoolHistory): Promise<SchoolHistory> {
    return super.SeekLast(schoolHistory);
  }

  SeekByValue(value: string = ''): Promise<SchoolHistory[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}