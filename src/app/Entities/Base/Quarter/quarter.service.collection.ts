import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Quarter } from './quarter';

import { YearQuarter } from '../YearQuarter/yearQuarter';


@Injectable({ providedIn: 'root' })
export class QuarterServiceCollection extends ServiceCollection<Quarter> {

  constructor(public API_Operation: API_Operation<Quarter>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfYearQuarter(quarter: Quarter, yearQuarter: YearQuarter = YearQuarter.SeekInstance()): Promise<YearQuarter[]> {
    return super.CollectionOf<YearQuarter>(quarter, yearQuarter);
  }

	//endregion
}