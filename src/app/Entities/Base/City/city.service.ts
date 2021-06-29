import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { City } from './city';
import { CityServiceCollection } from './city.service.collection';

import { ProvinceService } from '../Province/province.service';
import { Person } from '../../HR/Person/person';
import { Habitancy } from '../../HR/Habitancy/habitancy';
import { University } from '../University/university';


@Injectable({ providedIn: 'root' })
export class CityService extends Service<City> implements IService<City> {

  constructor(public ServiceCollection: CityServiceCollection,
		public ProvinceService: ProvinceService) {
    super(ServiceCollection.API_Operation, City.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<City> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<City[]> {
    return super.RetrieveAll();
  }

  Save(city: City): Promise<City> {
    if (!City.Validate(city)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(city);
    }
    return super.Save(city);
  }

  SaveAttached(city: City): Promise<City> {
    if (!City.Validate(city)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(city);
    }
    return super.SaveAttached(city);
  }

  SaveCollection(cityList: City[]): Promise<Result> {
    return super.SaveCollection(cityList);
  }

  Delete(city: City): Promise<boolean> {
    return super.Delete(city);
  }

  Seek(city: City = City.SeekInstance()): Promise<City[]> {
    return super.Seek(city);
  }

  SeekLast(city: City): Promise<City> {
    return super.SeekLast(city);
  }

  SeekByValue(value: string = ''): Promise<City[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}