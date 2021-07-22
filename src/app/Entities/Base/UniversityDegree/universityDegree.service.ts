import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { UniversityDegree } from './universityDegree';
import { UniversityDegreeServiceCollection } from './universityDegree.service.collection';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class UniversityDegreeService extends Service<UniversityDegree> implements IService<UniversityDegree> {

  constructor(public ServiceCollection: UniversityDegreeServiceCollection) {
    super(ServiceCollection.API_Operation, UniversityDegree.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new UniversityDegree();
}

  RetrieveById(id: number): Promise<UniversityDegree> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<UniversityDegree[]> {
    return super.RetrieveAll();
  }

  Save(universityDegree: UniversityDegree): Promise<UniversityDegree> {
    if (!UniversityDegree.Validate(universityDegree)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityDegree);
    }
    return super.Save(universityDegree);
  }

  SaveAttached(universityDegree: UniversityDegree): Promise<UniversityDegree> {
    if (!UniversityDegree.Validate(universityDegree)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(universityDegree);
    }
    return super.SaveAttached(universityDegree);
  }

  SaveCollection(universityDegreeList: UniversityDegree[]): Promise<Result> {
    return super.SaveCollection(universityDegreeList);
  }

  Delete(universityDegree: UniversityDegree): Promise<boolean> {
    return super.Delete(universityDegree);
  }

  Seek(universityDegree: UniversityDegree = UniversityDegree.SeekInstance()): Promise<UniversityDegree[]> {
    return super.Seek(universityDegree);
  }

  SeekLast(universityDegree: UniversityDegree): Promise<UniversityDegree> {
    return super.SeekLast(universityDegree);
  }

  SeekByValue(value: string = ''): Promise<UniversityDegree[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}