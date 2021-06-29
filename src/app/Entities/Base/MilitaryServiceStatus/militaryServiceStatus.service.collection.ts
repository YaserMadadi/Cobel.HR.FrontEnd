import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MilitaryServiceStatus } from './militaryServiceStatus';

import { MilitaryService } from '../../HR/MilitaryService/militaryService';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceStatusServiceCollection extends ServiceCollection<MilitaryServiceStatus> {

  constructor(public API_Operation: API_Operation<MilitaryServiceStatus>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfMilitaryService(militaryServiceStatus: MilitaryServiceStatus, militaryService: MilitaryService = MilitaryService.SeekInstance()): Promise<MilitaryService[]> {
    return super.CollectionOf<MilitaryService>(militaryServiceStatus, militaryService);
  }

	//endregion
}