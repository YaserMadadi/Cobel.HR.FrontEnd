import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ConclusionType } from './conclusionType';
import { ConclusionTypeServiceCollection } from './conclusionType.service.collection';

import { Conclusion } from '../Conclusion/conclusion';


@Injectable({ providedIn: 'root' })
export class ConclusionTypeService extends Service<ConclusionType> implements IService<ConclusionType> {

  constructor(public ServiceCollection: ConclusionTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ConclusionType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new ConclusionType();
}

  RetrieveById(id: number): Promise<ConclusionType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ConclusionType[]> {
    return super.RetrieveAll();
  }

  Save(conclusionType: ConclusionType): Promise<ConclusionType> {
    if (!ConclusionType.Validate(conclusionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(conclusionType);
    }
    return super.Save(conclusionType);
  }

  SaveAttached(conclusionType: ConclusionType): Promise<ConclusionType> {
    if (!ConclusionType.Validate(conclusionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(conclusionType);
    }
    return super.SaveAttached(conclusionType);
  }

  SaveCollection(conclusionTypeList: ConclusionType[]): Promise<Result> {
    return super.SaveCollection(conclusionTypeList);
  }

  Delete(conclusionType: ConclusionType): Promise<boolean> {
    return super.Delete(conclusionType);
  }

  Seek(conclusionType: ConclusionType = ConclusionType.SeekInstance()): Promise<ConclusionType[]> {
    return super.Seek(conclusionType);
  }

  SeekLast(conclusionType: ConclusionType): Promise<ConclusionType> {
    return super.SeekLast(conclusionType);
  }

  SeekByValue(value: string = ''): Promise<ConclusionType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}