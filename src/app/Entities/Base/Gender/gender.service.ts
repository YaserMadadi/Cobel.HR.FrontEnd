import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Gender } from './gender';
import { GenderServiceCollection } from './gender.service.collection';

import { Person } from '../../HR/Person/person';
import { Coach } from '../../LAD/Coach/coach';
import { Assessor } from '../../LAD/Assessor/assessor';


@Injectable({ providedIn: 'root' })
export class GenderService extends Service<Gender> implements IService<Gender> {

  constructor(public ServiceCollection: GenderServiceCollection) {
    super(ServiceCollection.API_Operation, Gender.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Gender> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Gender[]> {
    return super.RetrieveAll();
  }

  Save(gender: Gender): Promise<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(gender);
    }
    return super.Save(gender);
  }

  SaveAttached(gender: Gender): Promise<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(gender);
    }
    return super.SaveAttached(gender);
  }

  SaveCollection(genderList: Gender[]): Promise<Result> {
    return super.SaveCollection(genderList);
  }

  Delete(gender: Gender): Promise<boolean> {
    return super.Delete(gender);
  }

  Seek(gender: Gender = Gender.SeekInstance()): Promise<Gender[]> {
    return super.Seek(gender);
  }

  SeekLast(gender: Gender): Promise<Gender> {
    return super.SeekLast(gender);
  }

  SeekByValue(value: string = ''): Promise<Gender[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}