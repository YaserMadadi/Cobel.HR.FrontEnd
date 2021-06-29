import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { UniversityTerminate } from './universityTerminate';
import { UniversityTerminateServiceCollection } from './universityTerminate.service.collection';

import { UniversityHistoryService } from '../UniversityHistory/universityHistory.service';


@Injectable({ providedIn: 'root' })
export class UniversityTerminateService extends Service<UniversityTerminate> implements IService<UniversityTerminate> {

  constructor(public ServiceCollection: UniversityTerminateServiceCollection,
		public UniversityHistoryService: UniversityHistoryService) {
    super(ServiceCollection.API_Operation, UniversityTerminate.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<UniversityTerminate> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<UniversityTerminate[]> {
    return super.RetrieveAll();
  }

  Save(universityTerminate: UniversityTerminate): Promise<UniversityTerminate> {
    if (!UniversityTerminate.Validate(universityTerminate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityTerminate);
    }
    return super.Save(universityTerminate);
  }

  SaveAttached(universityTerminate: UniversityTerminate): Promise<UniversityTerminate> {
    if (!UniversityTerminate.Validate(universityTerminate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityTerminate);
    }
    return super.SaveAttached(universityTerminate);
  }

  SaveCollection(universityTerminateList: UniversityTerminate[]): Promise<Result> {
    return super.SaveCollection(universityTerminateList);
  }

  Delete(universityTerminate: UniversityTerminate): Promise<boolean> {
    return super.Delete(universityTerminate);
  }

  Seek(universityTerminate: UniversityTerminate = UniversityTerminate.SeekInstance()): Promise<UniversityTerminate[]> {
    return super.Seek(universityTerminate);
  }

  SeekLast(universityTerminate: UniversityTerminate): Promise<UniversityTerminate> {
    return super.SeekLast(universityTerminate);
  }

  SeekByValue(value: string = ''): Promise<UniversityTerminate[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}