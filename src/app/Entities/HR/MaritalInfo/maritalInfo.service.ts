import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MaritalInfo } from './maritalInfo';
import { MaritalInfoServiceCollection } from './maritalInfo.service.collection';

import { PersonService } from '../Person/person.service';


@Injectable({ providedIn: 'root' })
export class MaritalInfoService extends Service<MaritalInfo> implements IService<MaritalInfo> {

  constructor(public ServiceCollection: MaritalInfoServiceCollection,
		public PersonService: PersonService) {
    super(ServiceCollection.API_Operation, MaritalInfo.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MaritalInfo> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MaritalInfo[]> {
    return super.RetrieveAll();
  }

  Save(maritalInfo: MaritalInfo): Promise<MaritalInfo> {
    if (!MaritalInfo.Validate(maritalInfo)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(maritalInfo);
    }
    return super.Save(maritalInfo);
  }

  SaveAttached(maritalInfo: MaritalInfo): Promise<MaritalInfo> {
    if (!MaritalInfo.Validate(maritalInfo)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(maritalInfo);
    }
    return super.SaveAttached(maritalInfo);
  }

  SaveCollection(maritalInfoList: MaritalInfo[]): Promise<Result> {
    return super.SaveCollection(maritalInfoList);
  }

  Delete(maritalInfo: MaritalInfo): Promise<boolean> {
    return super.Delete(maritalInfo);
  }

  Seek(maritalInfo: MaritalInfo = MaritalInfo.SeekInstance()): Promise<MaritalInfo[]> {
    return super.Seek(maritalInfo);
  }

  SeekLast(maritalInfo: MaritalInfo): Promise<MaritalInfo> {
    return super.SeekLast(maritalInfo);
  }

  SeekByValue(value: string = ''): Promise<MaritalInfo[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}