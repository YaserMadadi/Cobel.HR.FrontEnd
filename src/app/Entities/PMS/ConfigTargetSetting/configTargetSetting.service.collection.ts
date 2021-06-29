import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ConfigTargetSetting } from './configTargetSetting';

import { ConfigQualitativeObjective } from '../ConfigQualitativeObjective/configQualitativeObjective';


@Injectable({ providedIn: 'root' })
export class ConfigTargetSettingServiceCollection extends ServiceCollection<ConfigTargetSetting> {

  constructor(public API_Operation: API_Operation<ConfigTargetSetting>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfConfigQualitativeObjective(configTargetSetting: ConfigTargetSetting, configQualitativeObjective: ConfigQualitativeObjective = ConfigQualitativeObjective.SeekInstance()): Promise<ConfigQualitativeObjective[]> {
    return super.CollectionOf<ConfigQualitativeObjective>(configTargetSetting, configQualitativeObjective);
  }


	//endregion
}