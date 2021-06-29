import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { EmploymentStatus } from './employmentStatus';

import { EmployeeDetail } from '../../HR/EmployeeDetail/employeeDetail';
import { Employee } from '../../HR/Employee/employee';


@Injectable({ providedIn: 'root' })
export class EmploymentStatusServiceCollection extends ServiceCollection<EmploymentStatus> {

  constructor(public API_Operation: API_Operation<EmploymentStatus>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfEmployee(employmentStatus: EmploymentStatus, employee: Employee = Employee.SeekInstance()): Promise<Employee[]> {
    return super.CollectionOf<Employee>(employmentStatus, employee);
  }

  CollectionOfEmployeeDetail(employmentStatus: EmploymentStatus, employeeDetail: EmployeeDetail = EmployeeDetail.SeekInstance()): Promise<EmployeeDetail[]> {
    return super.CollectionOf<EmployeeDetail>(employmentStatus, employeeDetail);
  }

	//endregion
}