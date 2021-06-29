import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Department } from './department';

import { Unit } from '../Unit/unit';


@Injectable({ providedIn: 'root' })
export class DepartmentServiceCollection extends ServiceCollection<Department> {

  constructor(public API_Operation: API_Operation<Department>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfUnit(department: Department, unit: Unit = Unit.SeekInstance()): Promise<Unit[]> {
    return super.CollectionOf<Unit>(department, unit);
  }

	//endregion
}