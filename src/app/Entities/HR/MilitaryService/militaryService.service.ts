import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { MilitaryService } from './militaryService';
import { MilitaryServiceServiceCollection } from './militaryService.service.collection';

import { PersonService } from '../Person/person.service';
import { MilitaryServiceStatusService } from '../../Base/MilitaryServiceStatus/militaryServiceStatus.service';
import { MilitaryServiceInclusive } from '../MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceExcemption } from '../MilitaryServiceExcemption/militaryServiceExcemption';


@Injectable({ providedIn: 'root' })
export class MilitaryServiceService extends Service<MilitaryService> implements IService<MilitaryService> {

  constructor(public ServiceCollection: MilitaryServiceServiceCollection,
		public PersonService: PersonService,
		public MilitaryServiceStatusService: MilitaryServiceStatusService) {
    super(ServiceCollection.API_Operation, MilitaryService.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<MilitaryService> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<MilitaryService[]> {
    return super.RetrieveAll();
  }

  Save(militaryService: MilitaryService): Promise<MilitaryService> {
    if (!MilitaryService.Validate(militaryService)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryService);
    }
    return super.Save(militaryService);
  }

  SaveAttached(militaryService: MilitaryService): Promise<MilitaryService> {
    if (!MilitaryService.Validate(militaryService)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(militaryService);
    }
    return super.SaveAttached(militaryService);
  }

  SaveCollection(militaryServiceList: MilitaryService[]): Promise<Result> {
    return super.SaveCollection(militaryServiceList);
  }

  Delete(militaryService: MilitaryService): Promise<boolean> {
    return super.Delete(militaryService);
  }

  Seek(militaryService: MilitaryService = MilitaryService.SeekInstance()): Promise<MilitaryService[]> {
    return super.Seek(militaryService);
  }

  SeekLast(militaryService: MilitaryService): Promise<MilitaryService> {
    return super.SeekLast(militaryService);
  }

  SeekByValue(value: string = ''): Promise<MilitaryService[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}