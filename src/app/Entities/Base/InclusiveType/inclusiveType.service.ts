import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { InclusiveType } from './inclusiveType';
import { InclusiveTypeServiceCollection } from './inclusiveType.service.collection';

import { MilitaryServiceInclusive } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive';


@Injectable({ providedIn: 'root' })
export class InclusiveTypeService extends Service<InclusiveType> implements IService<InclusiveType> {

  constructor(public ServiceCollection: InclusiveTypeServiceCollection) {
    super(ServiceCollection.API_Operation, InclusiveType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new InclusiveType();
}

  RetrieveById(id: number): Promise<InclusiveType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<InclusiveType[]> {
    return super.RetrieveAll();
  }

  Save(inclusiveType: InclusiveType): Promise<InclusiveType> {
    if (!InclusiveType.Validate(inclusiveType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(inclusiveType);
    }
    return super.Save(inclusiveType);
  }

  SaveAttached(inclusiveType: InclusiveType): Promise<InclusiveType> {
    if (!InclusiveType.Validate(inclusiveType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(inclusiveType);
    }
    return super.SaveAttached(inclusiveType);
  }

  SaveCollection(inclusiveTypeList: InclusiveType[]): Promise<Result> {
    return super.SaveCollection(inclusiveTypeList);
  }

  Delete(inclusiveType: InclusiveType): Promise<boolean> {
    return super.Delete(inclusiveType);
  }

  Seek(inclusiveType: InclusiveType = InclusiveType.SeekInstance()): Promise<InclusiveType[]> {
    return super.Seek(inclusiveType);
  }

  SeekLast(inclusiveType: InclusiveType): Promise<InclusiveType> {
    return super.SeekLast(inclusiveType);
  }

  SeekByValue(value: string = ''): Promise<InclusiveType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}