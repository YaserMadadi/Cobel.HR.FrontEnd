import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { TargetSettingMode } from './targetSettingMode';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Injectable({ providedIn: 'root' })
export class TargetSettingModeServiceCollection extends ServiceCollection<TargetSettingMode> {

  constructor(public API_Operation: API_Operation<TargetSettingMode>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfTargetSetting(targetSettingMode: TargetSettingMode, targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.CollectionOf<TargetSetting>(targetSettingMode, targetSetting);
  }

	//endregion
}
