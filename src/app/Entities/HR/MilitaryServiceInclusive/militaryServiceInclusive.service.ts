import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MilitaryServiceInclusive } from './militaryServiceInclusive';
import { MilitaryServiceInclusiveServiceCollection } from './militaryServiceInclusive.service.collection';

import { MilitaryServiceService } from '../MilitaryService/militaryService.service';
import { InclusiveTypeService } from '../../Base/InclusiveType/inclusiveType.service';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceInclusiveService extends Service<MilitaryServiceInclusive> implements IService<MilitaryServiceInclusive> {

  constructor(public ServiceCollection: MilitaryServiceInclusiveServiceCollection,
		public MilitaryServiceService: MilitaryServiceService,
		public InclusiveTypeService: InclusiveTypeService) {
    super(ServiceCollection.API_Operation, MilitaryServiceInclusive.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new MilitaryServiceInclusive();
}

  RetrieveById(id: number): Promise<MilitaryServiceInclusive> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MilitaryServiceInclusive[]> {
    return super.RetrieveAll();
  }

  Save(militaryServiceInclusive: MilitaryServiceInclusive): Promise<MilitaryServiceInclusive> {
    if (!MilitaryServiceInclusive.Validate(militaryServiceInclusive)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceInclusive);
    }
    return super.Save(militaryServiceInclusive);
  }

  SaveAttached(militaryServiceInclusive: MilitaryServiceInclusive): Promise<MilitaryServiceInclusive> {
    if (!MilitaryServiceInclusive.Validate(militaryServiceInclusive)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryServiceInclusive);
    }
    return super.SaveAttached(militaryServiceInclusive);
  }

  SaveCollection(militaryServiceInclusiveList: MilitaryServiceInclusive[]): Promise<Result> {
    return super.SaveCollection(militaryServiceInclusiveList);
  }

  Delete(militaryServiceInclusive: MilitaryServiceInclusive): Promise<boolean> {
    return super.Delete(militaryServiceInclusive);
  }

  Seek(militaryServiceInclusive: MilitaryServiceInclusive = MilitaryServiceInclusive.SeekInstance()): Promise<MilitaryServiceInclusive[]> {
    return super.Seek(militaryServiceInclusive);
  }

  SeekLast(militaryServiceInclusive: MilitaryServiceInclusive): Promise<MilitaryServiceInclusive> {
    return super.SeekLast(militaryServiceInclusive);
  }

  SeekByValue(value: string = ''): Promise<MilitaryServiceInclusive[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}