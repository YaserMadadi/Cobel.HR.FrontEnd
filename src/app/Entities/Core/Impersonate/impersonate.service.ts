import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Impersonate } from './impersonate';
import { ImpersonateServiceCollection } from './impersonate.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class ImpersonateService extends Service<Impersonate> implements IService<Impersonate> {

  constructor(public ServiceCollection: ImpersonateServiceCollection,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, Impersonate.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Impersonate();
}

  RetrieveById(id: number): Promise<Impersonate> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Impersonate[]> {
    return super.RetrieveAll();
  }

  Save(impersonate: Impersonate): Promise<Impersonate> {
    if (!Impersonate.Validate(impersonate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(impersonate);
    }
    return super.Save(impersonate);
  }

  SaveAttached(impersonate: Impersonate): Promise<Impersonate> {
    if (!Impersonate.Validate(impersonate)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(impersonate);
    }
    return super.SaveAttached(impersonate);
  }

  SaveCollection(impersonateList: Impersonate[]): Promise<Result> {
    return super.SaveCollection(impersonateList);
  }

  Delete(impersonate: Impersonate): Promise<boolean> {
    return super.Delete(impersonate);
  }

  Seek(impersonate: Impersonate = Impersonate.SeekInstance()): Promise<Impersonate[]> {
    return super.Seek(impersonate);
  }

  SeekLast(impersonate: Impersonate): Promise<Impersonate> {
    return super.SeekLast(impersonate);
  }

  SeekByValue(value: string = ''): Promise<Impersonate[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}