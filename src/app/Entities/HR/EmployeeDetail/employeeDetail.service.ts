import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { EmployeeDetail } from './employeeDetail';
import { EmployeeDetailServiceCollection } from './employeeDetail.service.collection';

import { EmployeeService } from '../Employee/employee.service';
import { HoldingSectionService } from '../../Base/HoldingSection/holdingSection.service';
import { EmploymentStatusService } from '../../Base.HR/EmploymentStatus/employmentStatus.service';


@Injectable({ providedIn: 'root' })
export class EmployeeDetailService extends Service<EmployeeDetail> implements IService<EmployeeDetail> {

  constructor(public ServiceCollection: EmployeeDetailServiceCollection,
		public EmployeeService: EmployeeService,
		public HoldingSectionService: HoldingSectionService,
		public EmploymentStatusService: EmploymentStatusService) {
    super(ServiceCollection.API_Operation, EmployeeDetail.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new EmployeeDetail();
}

  RetrieveById(id: number): Promise<EmployeeDetail> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<EmployeeDetail[]> {
    return super.RetrieveAll();
  }

  Save(employeeDetail: EmployeeDetail): Promise<EmployeeDetail> {
    if (!EmployeeDetail.Validate(employeeDetail)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeDetail);
    }
    return super.Save(employeeDetail);
  }

  SaveAttached(employeeDetail: EmployeeDetail): Promise<EmployeeDetail> {
    if (!EmployeeDetail.Validate(employeeDetail)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employeeDetail);
    }
    return super.SaveAttached(employeeDetail);
  }

  SaveCollection(employeeDetailList: EmployeeDetail[]): Promise<Result> {
    return super.SaveCollection(employeeDetailList);
  }

  Delete(employeeDetail: EmployeeDetail): Promise<boolean> {
    return super.Delete(employeeDetail);
  }

  Seek(employeeDetail: EmployeeDetail = EmployeeDetail.SeekInstance()): Promise<EmployeeDetail[]> {
    return super.Seek(employeeDetail);
  }

  SeekLast(employeeDetail: EmployeeDetail): Promise<EmployeeDetail> {
    return super.SeekLast(employeeDetail);
  }

  SeekByValue(value: string = ''): Promise<EmployeeDetail[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}