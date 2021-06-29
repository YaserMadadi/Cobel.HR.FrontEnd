import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Country } from './country';
import { CountryServiceCollection } from './country.service.collection';

import { Person } from '../../HR/Person/person';


@Injectable({ providedIn: 'root' })
export class CountryService extends Service<Country> implements IService<Country> {

  constructor(public ServiceCollection: CountryServiceCollection) {
    super(ServiceCollection.API_Operation, Country.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Country> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Country[]> {
    return super.RetrieveAll();
  }

  Save(country: Country): Promise<Country> {
    if (!Country.Validate(country)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(country);
    }
    return super.Save(country);
  }

  SaveAttached(country: Country): Promise<Country> {
    if (!Country.Validate(country)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(country);
    }
    return super.SaveAttached(country);
  }

  SaveCollection(countryList: Country[]): Promise<Result> {
    return super.SaveCollection(countryList);
  }

  Delete(country: Country): Promise<boolean> {
    return super.Delete(country);
  }

  Seek(country: Country = Country.SeekInstance()): Promise<Country[]> {
    return super.Seek(country);
  }

  SeekLast(country: Country): Promise<Country> {
    return super.SeekLast(country);
  }

  SeekByValue(value: string = ''): Promise<Country[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}