import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ContractType } from './contractType';
import { ContractTypeServiceCollection } from './contractType.service.collection';

import { Contract } from '../../HR/Contract/contract';


@Injectable({ providedIn: 'root' })
export class ContractTypeService extends Service<ContractType> implements IService<ContractType> {

  constructor(public ServiceCollection: ContractTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ContractType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ContractType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ContractType[]> {
    return super.RetrieveAll();
  }

  Save(contractType: ContractType): Promise<ContractType> {
    if (!ContractType.Validate(contractType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(contractType);
    }
    return super.Save(contractType);
  }

  SaveAttached(contractType: ContractType): Promise<ContractType> {
    if (!ContractType.Validate(contractType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(contractType);
    }
    return super.SaveAttached(contractType);
  }

  SaveCollection(contractTypeList: ContractType[]): Promise<Result> {
    return super.SaveCollection(contractTypeList);
  }

  Delete(contractType: ContractType): Promise<boolean> {
    return super.Delete(contractType);
  }

  Seek(contractType: ContractType = ContractType.SeekInstance()): Promise<ContractType[]> {
    return super.Seek(contractType);
  }

  SeekLast(contractType: ContractType): Promise<ContractType> {
    return super.SeekLast(contractType);
  }

  SeekByValue(value: string = ''): Promise<ContractType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}