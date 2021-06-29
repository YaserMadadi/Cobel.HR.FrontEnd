import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { HabitancyType } from './habitancyType';
import { HabitancyTypeServiceCollection } from './habitancyType.service.collection';

import { Habitancy } from '../../HR/Habitancy/habitancy';


@Injectable({ providedIn: 'root' })
export class HabitancyTypeService extends Service<HabitancyType> implements IService<HabitancyType> {

  constructor(public ServiceCollection: HabitancyTypeServiceCollection) {
    super(ServiceCollection.API_Operation, HabitancyType.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<HabitancyType> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<HabitancyType[]> {
    return super.RetrieveAll();
  }

  Save(habitancyType: HabitancyType): Promise<HabitancyType> {
    if (!HabitancyType.Validate(habitancyType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(habitancyType);
    }
    return super.Save(habitancyType);
  }

  SaveAttached(habitancyType: HabitancyType): Promise<HabitancyType> {
    if (!HabitancyType.Validate(habitancyType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(habitancyType);
    }
    return super.SaveAttached(habitancyType);
  }

  SaveCollection(habitancyTypeList: HabitancyType[]): Promise<Result> {
    return super.SaveCollection(habitancyTypeList);
  }

  Delete(habitancyType: HabitancyType): Promise<boolean> {
    return super.Delete(habitancyType);
  }

  Seek(habitancyType: HabitancyType = HabitancyType.SeekInstance()): Promise<HabitancyType[]> {
    return super.Seek(habitancyType);
  }

  SeekLast(habitancyType: HabitancyType): Promise<HabitancyType> {
    return super.SeekLast(habitancyType);
  }

  SeekByValue(value: string = ''): Promise<HabitancyType[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}