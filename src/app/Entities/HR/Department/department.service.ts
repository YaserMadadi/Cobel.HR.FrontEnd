import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Department } from './department';
import { DepartmentServiceCollection } from './department.service.collection';

import { Unit } from '../Unit/unit';


@Injectable({ providedIn: 'root' })
export class DepartmentService extends Service<Department> implements IService<Department> {

  constructor(public ServiceCollection: DepartmentServiceCollection) {
    super(ServiceCollection.API_Operation, Department.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Department> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Department[]> {
    return super.RetrieveAll();
  }

  Save(department: Department): Promise<Department> {
    if (!Department.Validate(department)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(department);
    }
    return super.Save(department);
  }

  SaveAttached(department: Department): Promise<Department> {
    if (!Department.Validate(department)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(department);
    }
    return super.SaveAttached(department);
  }

  SaveCollection(departmentList: Department[]): Promise<Result> {
    return super.SaveCollection(departmentList);
  }

  Delete(department: Department): Promise<boolean> {
    return super.Delete(department);
  }

  Seek(department: Department = Department.SeekInstance()): Promise<Department[]> {
    return super.Seek(department);
  }

  SeekLast(department: Department): Promise<Department> {
    return super.SeekLast(department);
  }

  SeekByValue(value: string = ''): Promise<Department[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}