import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Province } from './province';
import { ProvinceServiceCollection } from './province.service.collection';

import { City } from '../City/city';


@Injectable({ providedIn: 'root' })
export class ProvinceService extends Service<Province> implements IService<Province> {

  constructor(public ServiceCollection: ProvinceServiceCollection) {
    super(ServiceCollection.API_Operation, Province.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<Province> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Province[]> {
    return super.RetrieveAll();
  }

  Save(province: Province): Promise<Province> {
    if (!Province.Validate(province)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(province);
    }
    return super.Save(province);
  }

  SaveAttached(province: Province): Promise<Province> {
    if (!Province.Validate(province)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(province);
    }
    return super.SaveAttached(province);
  }

  SaveCollection(provinceList: Province[]): Promise<Result> {
    return super.SaveCollection(provinceList);
  }

  Delete(province: Province): Promise<boolean> {
    return super.Delete(province);
  }

  Seek(province: Province = Province.SeekInstance()): Promise<Province[]> {
    return super.Seek(province);
  }

  SeekLast(province: Province): Promise<Province> {
    return super.SeekLast(province);
  }

  SeekByValue(value: string = ''): Promise<Province[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}