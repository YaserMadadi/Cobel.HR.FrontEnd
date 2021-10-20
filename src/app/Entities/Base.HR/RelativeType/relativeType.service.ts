import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { RelativeType } from './relativeType';
import { RelativeTypeServiceCollection } from './relativeType.service.collection';

import { Relative } from '../../HR/Relative/relative';


@Injectable({ providedIn: 'root' })
export class RelativeTypeService extends Service<RelativeType> implements IService<RelativeType> {

  constructor(public ServiceCollection: RelativeTypeServiceCollection) {
    super(ServiceCollection.API_Operation, RelativeType.Info);
  }

  CreateInstance() {
   return new RelativeType();
}

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<RelativeType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<RelativeType[]> {
    return super.RetrieveAll();
  }

  Save(relativeType: RelativeType): Promise<RelativeType> {
    if (!RelativeType.Validate(relativeType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(relativeType);
    }
    return super.Save(relativeType);
  }

  SaveAttached(relativeType: RelativeType): Promise<RelativeType> {
    if (!RelativeType.Validate(relativeType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(relativeType);
    }
    return super.SaveAttached(relativeType);
  }

  SaveCollection(relativeTypeList: RelativeType[]): Promise<Result> {
    return super.SaveCollection(relativeTypeList);
  }

  Delete(relativeType: RelativeType): Promise<boolean> {
    return super.Delete(relativeType);
  }

  Seek(relativeType: RelativeType = RelativeType.SeekInstance()): Promise<RelativeType[]> {
    return super.Seek(relativeType);
  }

  SeekLast(relativeType: RelativeType): Promise<RelativeType> {
    return super.SeekLast(relativeType);
  }

  SeekByValue(value: string = ''): Promise<RelativeType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}
