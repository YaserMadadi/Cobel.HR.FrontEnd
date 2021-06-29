import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { HoldingSection } from './holdingSection';

import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';
import { Employee } from '../../HR/Employee/employee';


@Injectable({ providedIn: 'root' })
export class HoldingSectionServiceCollection extends ServiceCollection<HoldingSection> {

  constructor(public API_Operation: API_Operation<HoldingSection>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfEmployee_LastHoldingSection(lastHoldingSection: HoldingSection, employee: Employee = Employee.SeekInstance()): Promise<Employee[]> {
    return super.CollectionOf<Employee>(lastHoldingSection, employee, 'LastHoldingSection');
  }

  CollectionOfEmployeeDetail(holdingSection: HoldingSection, employeeDetail: EmployeeDetail = EmployeeDetail.SeekInstance()): Promise<EmployeeDetail[]> {
    return super.CollectionOf<EmployeeDetail>(holdingSection, employeeDetail);
  }

	//endregion
}