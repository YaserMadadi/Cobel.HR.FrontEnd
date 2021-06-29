import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ConfigQualitativeKPI } from './configQualitativeKPI';



@Injectable({ providedIn: 'root' })
export class ConfigQualitativeKPIServiceCollection extends ServiceCollection<ConfigQualitativeKPI> {

  constructor(public API_Operation: API_Operation<ConfigQualitativeKPI>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}