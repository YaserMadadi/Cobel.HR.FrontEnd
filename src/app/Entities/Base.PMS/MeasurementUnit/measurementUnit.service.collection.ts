import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { MeasurementUnit } from './measurementUnit';

import { FunctionalKPI } from '../../PMS/FunctionalKPI/functionalKPI';


@Injectable({ providedIn: 'root' })
export class MeasurementUnitServiceCollection extends ServiceCollection<MeasurementUnit> {

  constructor(public API_Operation: API_Operation<MeasurementUnit>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfFunctionalKPI(measurementUnit: MeasurementUnit, functionalKPI: FunctionalKPI = FunctionalKPI.SeekInstance()): Promise<FunctionalKPI[]> {
    return super.CollectionOf<FunctionalKPI>(measurementUnit, functionalKPI);
  }

	//endregion
}