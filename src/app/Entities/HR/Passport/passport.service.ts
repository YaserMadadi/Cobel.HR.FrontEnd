import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Passport } from './passport';
import { PassportServiceCollection } from './passport.service.collection';

import { PersonService } from '../Person/person.service';


@Injectable({ providedIn: 'root' })
export class PassportService extends Service<Passport> implements IService<Passport> {

  constructor(public ServiceCollection: PassportServiceCollection,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, Passport.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Passport> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Passport[]> {
    return super.RetrieveAll();
  }

  Save(passport: Passport): Promise<Passport> {
    if (!Passport.Validate(passport)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(passport);
    }
    return super.Save(passport);
  }

  SaveAttached(passport: Passport): Promise<Passport> {
    if (!Passport.Validate(passport)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(passport);
    }
    return super.SaveAttached(passport);
  }

  SaveCollection(passportList: Passport[]): Promise<Result> {
    return super.SaveCollection(passportList);
  }

  Delete(passport: Passport): Promise<boolean> {
    return super.Delete(passport);
  }

  Seek(passport: Passport = Passport.SeekInstance()): Promise<Passport[]> {
    return super.Seek(passport);
  }

  SeekLast(passport: Passport): Promise<Passport> {
    return super.SeekLast(passport);
  }

  SeekByValue(value: string = ''): Promise<Passport[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}