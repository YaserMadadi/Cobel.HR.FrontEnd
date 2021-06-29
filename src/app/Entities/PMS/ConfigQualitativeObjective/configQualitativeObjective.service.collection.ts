import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ConfigQualitativeObjective } from './configQualitativeObjective';

import { ConfigQualitativeKPI } from '../ConfigQualitativeKPI/configQualitativeKPI';


@Injectable({ providedIn: 'root' })
export class ConfigQualitativeObjectiveServiceCollection extends ServiceCollection<ConfigQualitativeObjective> {

  constructor(public API_Operation: API_Operation<ConfigQualitativeObjective>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfConfigQualitativeKPI(configQualitativeObjective: ConfigQualitativeObjective, configQualitativeKPI: ConfigQualitativeKPI = ConfigQualitativeKPI.SeekInstance()): Promise<ConfigQualitativeKPI[]> {
    return super.CollectionOf<ConfigQualitativeKPI>(configQualitativeObjective, configQualitativeKPI);
  }

	//endregion
}