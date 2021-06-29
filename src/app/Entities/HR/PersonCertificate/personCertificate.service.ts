import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { PersonCertificate } from './personCertificate';
import { PersonCertificateServiceCollection } from './personCertificate.service.collection';

import { PersonService } from '../Person/person.service';
import { FieldCategoryService } from '../../Base/FieldCategory/fieldCategory.service';


@Injectable({ providedIn: 'root' })
export class PersonCertificateService extends Service<PersonCertificate> implements IService<PersonCertificate> {

  constructor(public ServiceCollection: PersonCertificateServiceCollection,
		public PersonService: PersonService,
		public FieldCategoryService: FieldCategoryService) {
    super(ServiceCollection.API_Operation, PersonCertificate.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<PersonCertificate> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<PersonCertificate[]> {
    return super.RetrieveAll();
  }

  Save(personCertificate: PersonCertificate): Promise<PersonCertificate> {
    if (!PersonCertificate.Validate(personCertificate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personCertificate);
    }
    return super.Save(personCertificate);
  }

  SaveAttached(personCertificate: PersonCertificate): Promise<PersonCertificate> {
    if (!PersonCertificate.Validate(personCertificate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(personCertificate);
    }
    return super.SaveAttached(personCertificate);
  }

  SaveCollection(personCertificateList: PersonCertificate[]): Promise<Result> {
    return super.SaveCollection(personCertificateList);
  }

  Delete(personCertificate: PersonCertificate): Promise<boolean> {
    return super.Delete(personCertificate);
  }

  Seek(personCertificate: PersonCertificate = PersonCertificate.SeekInstance()): Promise<PersonCertificate[]> {
    return super.Seek(personCertificate);
  }

  SeekLast(personCertificate: PersonCertificate): Promise<PersonCertificate> {
    return super.SeekLast(personCertificate);
  }

  SeekByValue(value: string = ''): Promise<PersonCertificate[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}