import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { ExcemptionType } from './excemptionType';
import { ExcemptionTypeServiceCollection } from './excemptionType.service.collection';

import { MilitaryServiceExcemption } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption';


@Injectable({ providedIn: 'root' })
export class ExcemptionTypeService extends Service<ExcemptionType> implements IService<ExcemptionType> {

  constructor(public ServiceCollection: ExcemptionTypeServiceCollection) {
    super(ServiceCollection.API_Operation, ExcemptionType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<ExcemptionType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<ExcemptionType[]> {
    return super.RetrieveAll();
  }

  Save(excemptionType: ExcemptionType): Promise<ExcemptionType> {
    if (!ExcemptionType.Validate(excemptionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(excemptionType);
    }
    return super.Save(excemptionType);
  }

  SaveAttached(excemptionType: ExcemptionType): Promise<ExcemptionType> {
    if (!ExcemptionType.Validate(excemptionType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(excemptionType);
    }
    return super.SaveAttached(excemptionType);
  }

  SaveCollection(excemptionTypeList: ExcemptionType[]): Promise<Result> {
    return super.SaveCollection(excemptionTypeList);
  }

  Delete(excemptionType: ExcemptionType): Promise<boolean> {
    return super.Delete(excemptionType);
  }

  Seek(excemptionType: ExcemptionType = ExcemptionType.SeekInstance()): Promise<ExcemptionType[]> {
    return super.Seek(excemptionType);
  }

  SeekLast(excemptionType: ExcemptionType): Promise<ExcemptionType> {
    return super.SeekLast(excemptionType);
  }

  SeekByValue(value: string = ''): Promise<ExcemptionType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}