import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { UniversityFieldCategory } from './universityFieldCategory';

import { FieldOfStudy } from '../FieldOfStudy/fieldOfStudy';


@Injectable({ providedIn: 'root' })
export class UniversityFieldCategoryServiceCollection extends ServiceCollection<UniversityFieldCategory> {

  constructor(public API_Operation: API_Operation<UniversityFieldCategory>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfFieldOfStudy(universityFieldCategory: UniversityFieldCategory, fieldOfStudy: FieldOfStudy = FieldOfStudy.SeekInstance()): Promise<FieldOfStudy[]> {
    return super.CollectionOf<FieldOfStudy>(universityFieldCategory, fieldOfStudy);
  }

	//endregion
}