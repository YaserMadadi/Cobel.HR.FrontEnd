import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MilitaryService } from './militaryService';

import { MilitaryServiceInclusive } from '../MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceExcemption } from '../MilitaryServiceExcemption/militaryServiceExcemption';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceServiceCollection extends ServiceCollection<MilitaryService> {

  constructor(public API_Operation: API_Operation<MilitaryService>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMilitaryServiceExcemption(militaryService: MilitaryService, militaryServiceExcemption: MilitaryServiceExcemption = MilitaryServiceExcemption.SeekInstance()): Promise<MilitaryServiceExcemption[]> {
    return super.CollectionOf<MilitaryServiceExcemption>(militaryService, militaryServiceExcemption);
  }

  CollectionOfMilitaryServiceInclusive(militaryService: MilitaryService, militaryServiceInclusive: MilitaryServiceInclusive = MilitaryServiceInclusive.SeekInstance()): Promise<MilitaryServiceInclusive[]> {
    return super.CollectionOf<MilitaryServiceInclusive>(militaryService, militaryServiceInclusive);
  }

	//endregion
}