import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EmployeeNotification } from './employeeNotification';



@Injectable({ providedIn: 'root' })
export class EmployeeNotificationServiceCollection extends ServiceCollection<EmployeeNotification> {

  constructor(public API_Operation: API_Operation<EmployeeNotification>) {
        super(API_Operation);
    }

  //region CollectionMethods

	//endregion
}