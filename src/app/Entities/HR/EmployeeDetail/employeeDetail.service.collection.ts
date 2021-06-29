import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EmployeeDetail } from './employeeDetail';



@Injectable({ providedIn: 'root' })
export class EmployeeDetailServiceCollection extends ServiceCollection<EmployeeDetail> {

  constructor(public API_Operation: API_Operation<EmployeeDetail>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}