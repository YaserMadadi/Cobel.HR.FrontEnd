import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { InclusiveType } from './inclusiveType';

import { MilitaryServiceInclusive } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive';


@Injectable({ providedIn: 'root' })
export class InclusiveTypeServiceCollection extends ServiceCollection<InclusiveType> {

  constructor(public API_Operation: API_Operation<InclusiveType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMilitaryServiceInclusive(inclusiveType: InclusiveType, militaryServiceInclusive: MilitaryServiceInclusive = MilitaryServiceInclusive.SeekInstance()): Promise<MilitaryServiceInclusive[]> {
    return super.CollectionOf<MilitaryServiceInclusive>(inclusiveType, militaryServiceInclusive);
  }

	//endregion
}