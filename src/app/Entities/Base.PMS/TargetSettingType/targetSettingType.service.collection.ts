import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { TargetSettingType } from './targetSettingType';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';


@Injectable({ providedIn: 'root' })
export class TargetSettingTypeServiceCollection extends ServiceCollection<TargetSettingType> {

  constructor(public API_Operation: API_Operation<TargetSettingType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfTargetSetting(targetSettingType: TargetSettingType, targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.CollectionOf<TargetSetting>(targetSettingType, targetSetting);
  }

	//endregion
}
