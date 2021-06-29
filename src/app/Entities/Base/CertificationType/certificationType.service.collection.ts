import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CertificationType } from './certificationType';

import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Injectable({ providedIn: 'root' })
export class CertificationTypeServiceCollection extends ServiceCollection<CertificationType> {

  constructor(public API_Operation: API_Operation<CertificationType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUniversityHistory(certificationType: CertificationType, universityHistory: UniversityHistory = UniversityHistory.SeekInstance()): Promise<UniversityHistory[]> {
    return super.CollectionOf<UniversityHistory>(certificationType, universityHistory);
  }

	//endregion
}