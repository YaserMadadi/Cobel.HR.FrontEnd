import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EmployeeEvent } from './employeeEvent';



@Injectable({ providedIn: 'root' })
export class EmployeeEventServiceCollection extends ServiceCollection<EmployeeEvent> {

  constructor(public API_Operation: API_Operation<EmployeeEvent>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}