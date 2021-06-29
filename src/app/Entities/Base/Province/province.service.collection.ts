import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Province } from './province';

import { City } from '../City/city';


@Injectable({ providedIn: 'root' })
export class ProvinceServiceCollection extends ServiceCollection<Province> {

  constructor(public API_Operation: API_Operation<Province>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCity(province: Province, city: City = City.SeekInstance()): Promise<City[]> {
    return super.CollectionOf<City>(province, city);
  }

	//endregion
}