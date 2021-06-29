import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { PersonCertificate } from './personCertificate';



@Injectable({ providedIn: 'root' })
export class PersonCertificateServiceCollection extends ServiceCollection<PersonCertificate> {

  constructor(public API_Operation: API_Operation<PersonCertificate>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}