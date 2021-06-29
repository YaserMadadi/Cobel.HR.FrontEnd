import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { University } from './university';
import { UniversityServiceCollection } from './university.service.collection';

import { CityService } from '../City/city.service';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class UniversityService extends Service<University> implements IService<University> {

  constructor(public ServiceCollection: UniversityServiceCollection,
		public CityService: CityService) {
    super(ServiceCollection.API_Operation, University.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<University> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<University[]> {
    return super.RetrieveAll();
  }

  Save(university: University): Promise<University> {
    if (!University.Validate(university)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(university);
    }
    return super.Save(university);
  }

  SaveAttached(university: University): Promise<University> {
    if (!University.Validate(university)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(university);
    }
    return super.SaveAttached(university);
  }

  SaveCollection(universityList: University[]): Promise<Result> {
    return super.SaveCollection(universityList);
  }

  Delete(university: University): Promise<boolean> {
    return super.Delete(university);
  }

  Seek(university: University = University.SeekInstance()): Promise<University[]> {
    return super.Seek(university);
  }

  SeekLast(university: University): Promise<University> {
    return super.SeekLast(university);
  }

  SeekByValue(value: string = ''): Promise<University[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}