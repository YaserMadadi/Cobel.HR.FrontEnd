import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { QualitativeKPI } from './qualitativeKPI';

import { QualitativeAppraise } from '../QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class QualitativeKPIServiceCollection extends ServiceCollection<QualitativeKPI> {

  constructor(public API_Operation: API_Operation<QualitativeKPI>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfQualitativeAppraise(qualitativeKPI: QualitativeKPI, qualitativeAppraise: QualitativeAppraise = QualitativeAppraise.SeekInstance()): Promise<QualitativeAppraise[]> {
    return super.CollectionOf<QualitativeAppraise>(qualitativeKPI, qualitativeAppraise);
  }

	//endregion
}