import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Contract } from './contract';
import { ContractServiceCollection } from './contract.service.collection';

import { EmployeeService } from '../Employee/employee.service';
import { ContractTypeService } from '../../Base.HR/ContractType/contractType.service';


@Injectable({ providedIn: 'root' })
export class ContractService extends Service<Contract> implements IService<Contract> {

  constructor(public ServiceCollection: ContractServiceCollection,
		public EmployeeService: EmployeeService,
		public ContractTypeService: ContractTypeService) {
    super(ServiceCollection.API_Operation, Contract.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Contract();
}

  RetrieveById(id: number): Promise<Contract> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Contract[]> {
    return super.RetrieveAll();
  }

  Save(contract: Contract): Promise<Contract> {
    if (!Contract.Validate(contract)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(contract);
    }
    return super.Save(contract);
  }

  SaveAttached(contract: Contract): Promise<Contract> {
    if (!Contract.Validate(contract)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(contract);
    }
    return super.SaveAttached(contract);
  }

  SaveCollection(contractList: Contract[]): Promise<Result> {
    return super.SaveCollection(contractList);
  }

  Delete(contract: Contract): Promise<boolean> {
    return super.Delete(contract);
  }

  Seek(contract: Contract = Contract.SeekInstance()): Promise<Contract[]> {
    return super.Seek(contract);
  }

  SeekLast(contract: Contract): Promise<Contract> {
    return super.SeekLast(contract);
  }

  SeekByValue(value: string = ''): Promise<Contract[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}