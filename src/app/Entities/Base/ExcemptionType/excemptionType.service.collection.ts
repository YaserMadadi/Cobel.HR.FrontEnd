import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ExcemptionType } from './excemptionType';

import { MilitaryServiceExcemption } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption';


@Injectable({ providedIn: 'root' })
export class ExcemptionTypeServiceCollection extends ServiceCollection<ExcemptionType> {

  constructor(public API_Operation: API_Operation<ExcemptionType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMilitaryServiceExcemption(excemptionType: ExcemptionType, militaryServiceExcemption: MilitaryServiceExcemption = MilitaryServiceExcemption.SeekInstance()): Promise<MilitaryServiceExcemption[]> {
    return super.CollectionOf<MilitaryServiceExcemption>(excemptionType, militaryServiceExcemption);
  }

	//endregion
}