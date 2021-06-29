import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { FieldCategory } from './fieldCategory';

import { PersonCertificate } from '../../HR/PersonCertificate/personCertificate';


@Injectable({ providedIn: 'root' })
export class FieldCategoryServiceCollection extends ServiceCollection<FieldCategory> {

  constructor(public API_Operation: API_Operation<FieldCategory>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPersonCertificate(fieldCategory: FieldCategory, personCertificate: PersonCertificate = PersonCertificate.SeekInstance()): Promise<PersonCertificate[]> {
    return super.CollectionOf<PersonCertificate>(fieldCategory, personCertificate);
  }

	//endregion
}