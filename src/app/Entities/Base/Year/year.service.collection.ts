import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Year } from './year';

import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { YearQuarter } from '../YearQuarter/yearQuarter';


@Injectable({ providedIn: 'root' })
export class YearServiceCollection extends ServiceCollection<Year> {

  constructor(public API_Operation: API_Operation<Year>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfTargetSetting(year: Year, targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.CollectionOf<TargetSetting>(year, targetSetting);
  }

  CollectionOfYearQuarter(year: Year, yearQuarter: YearQuarter = YearQuarter.SeekInstance()): Promise<YearQuarter[]> {
    return super.CollectionOf<YearQuarter>(year, yearQuarter);
  }

	//endregion
}