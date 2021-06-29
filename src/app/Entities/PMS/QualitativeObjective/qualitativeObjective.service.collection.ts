import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QualitativeObjective } from './qualitativeObjective';

import { QualitativeKPI } from '../QualitativeKPI/qualitativeKPI';


@Injectable({ providedIn: 'root' })
export class QualitativeObjectiveServiceCollection extends ServiceCollection<QualitativeObjective> {

  constructor(public API_Operation: API_Operation<QualitativeObjective>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfQualitativeKPI(qualitativeObjective: QualitativeObjective, qualitativeKPI: QualitativeKPI = QualitativeKPI.SeekInstance()): Promise<QualitativeKPI[]> {
    return super.CollectionOf<QualitativeKPI>(qualitativeObjective, qualitativeKPI);
  }

	//endregion
}